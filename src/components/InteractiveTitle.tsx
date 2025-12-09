'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface InteractiveTitleProps {
  lines: string[];
  gradientWords?: number[];
}

export default function InteractiveTitle({ lines, gradientWords = [1] }: InteractiveTitleProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Professional fade-in animation for each line
      const titleLines = container.querySelectorAll('.title-line');
      
      titleLines.forEach((line, index) => {
        gsap.from(line, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.15,
          ease: 'power2.out',
        });
      });

      // Subtle word hover effect - professional and minimal
      const words = container.querySelectorAll('.word-wrapper');
      words.forEach((word) => {
        word.addEventListener('mouseenter', () => {
          gsap.to(word, {
            opacity: 0.9,
            duration: 0.2,
            ease: 'power1.out',
          });
        });

        word.addEventListener('mouseleave', () => {
          gsap.to(word, {
            opacity: 1,
            duration: 0.2,
            ease: 'power1.out',
          });
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <h1
      ref={containerRef}
      className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold tracking-tight text-foreground mb-12 leading-[1.05]"
      aria-label={lines.join(' ')}
    >
      {lines.map((line, lineIndex) => {
        const isGradientLine = gradientWords.includes(lineIndex);
        const words = line.split(' ');

        return (
          <span key={lineIndex} className="title-line block mb-2 md:mb-3">
            {words.map((word, wordIndex) => (
              <span
                key={wordIndex}
                className="word-wrapper inline-block mr-2 md:mr-3"
              >
                <span
                  className={`inline-block ${
                    isGradientLine ? 'gradient-text' : ''
                  }`}
                >
                  {word}
                </span>
                {wordIndex < words.length - 1 && <span className="inline-block w-2 md:w-3" />}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}
