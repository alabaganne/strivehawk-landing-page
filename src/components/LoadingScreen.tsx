"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    // Animate progress from 0 to 100
    const duration = 1800; // ms
    const interval = 20; // ms
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Trigger exit animation
          setTimeout(() => {
            controls.start("exit");
          }, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [controls]);

  const handleExitComplete = () => {
    onLoadingComplete?.();
  };

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 1 },
        exit: { opacity: 1 },
      }}
      onAnimationComplete={(definition) => {
        if (definition === "exit") {
          handleExitComplete();
        }
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Background gradient pulse */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/30 blur-3xl"
      />

      {/* Content container */}
      <div className="relative flex flex-col items-center gap-12">
        {/* Logo with reveal animation */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="text-primary">Strive</span>
              <span className="text-foreground">hawk</span>
            </motion.h1>
          </motion.div>
        </div>

        {/* Progress bar container */}
        <div className="flex flex-col items-center gap-4 w-64">
          {/* Progress bar */}
          <div className="w-full h-[2px] bg-surface-hover rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          {/* Percentage counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-3xl md:text-4xl font-light text-foreground tabular-nums">
              {Math.round(progress)}
            </span>
            <span className="text-lg text-muted">%</span>
          </motion.div>
        </div>
      </div>

      {/* Exit curtains */}
      <motion.div
        variants={{
          initial: { scaleY: 0 },
          exit: { scaleY: 1 },
        }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
        style={{ originY: 0 }}
        className="absolute inset-0 bg-background"
      />
      <motion.div
        variants={{
          initial: { scaleY: 1 },
          exit: { scaleY: 0 },
        }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
        style={{ originY: 1 }}
        className="absolute inset-0 bg-background"
      />
    </motion.div>
  );
}
