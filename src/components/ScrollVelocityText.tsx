'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface ScrollVelocityTextProps {
  children: string;
  baseVelocity?: number;
  className?: string;
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export default function ScrollVelocityText({
  children,
  baseVelocity = 100,
  className = '',
}: ScrollVelocityTextProps) {
  const baseX = useMotionValue(0);
  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [children]);

  const scrollVelocity = useMotionValue(0);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef<number>(1);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;
      scrollVelocity.set(Math.abs(diff) * 10);
      directionFactor.current = diff > 0 ? 1 : -1;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollVelocity]);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div
      ref={containerRef}
      className="overflow-hidden whitespace-nowrap"
    >
      <motion.div className="inline-flex" style={{ x }}>
        {[...Array(repetitions)].map((_, i) => (
          <span
            key={i}
            ref={i === 0 ? textRef : undefined}
            className={`inline-block ${className}`}
          >
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
