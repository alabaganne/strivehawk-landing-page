"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        onLoadingComplete();
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      {/* Background gradient pulse */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/30 blur-3xl"
      />

      {/* Content container */}
      <div className="relative flex flex-col items-center gap-10">
        {/* Logo with reveal animation */}
        <div className="relative overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.6,
              ease: [0.33, 1, 0.68, 1],
              delay: 0.1,
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-primary">Strive</span>
              <span className="text-foreground">hawk</span>
            </h1>
          </motion.div>
        </div>

        {/* Progress bar container */}
        <div className="flex flex-col items-center gap-4 w-48">
          {/* Progress bar */}
          <div className="w-full h-[2px] bg-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>

          {/* Percentage counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-2xl md:text-3xl font-light text-foreground tabular-nums">
              {Math.round(progress)}
            </span>
            <span className="text-sm text-muted">%</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
