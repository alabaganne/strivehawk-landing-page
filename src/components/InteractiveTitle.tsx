'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface InteractiveTitleProps {
  lines: string[];
  gradientWords?: number[];
}

export default function InteractiveTitle({ lines, gradientWords = [1] }: InteractiveTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Title reveal animation
      const titleLines = titleRef.current?.querySelectorAll('.title-line');
      if (titleLines) {
        titleLines.forEach((line, index) => {
          const words = line.querySelectorAll('.word-wrapper');
          
          words.forEach((word, wordIndex) => {
            const wordElement = word as HTMLElement;
            const isBlurred = wordElement.querySelector('.blur-word');
            
            gsap.from(wordElement, {
              opacity: 0,
              y: 50,
              filter: isBlurred ? 'blur(15px)' : 'blur(8px)',
              duration: 1,
              delay: index * 0.2 + wordIndex * 0.12,
              ease: 'power2.out',
            });
          });
        });
      }

      // Network nodes animation
      const nodes = networkRef.current?.querySelectorAll('.network-node');
      if (nodes) {
        nodes.forEach((node, index) => {
          gsap.from(node, {
            opacity: 0,
            scale: 0,
            duration: 0.7,
            delay: 1.3 + index * 0.2,
            ease: 'back.out(1.7)',
          });

          // Subtle continuous pulse
          gsap.to(node, {
            scale: 1.08,
            opacity: 0.85,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 2 + index * 0.3,
          });
        });
      }

      // Network lines animation - X pattern
      const lines = networkRef.current?.querySelectorAll('.network-line');
      if (lines) {
        lines.forEach((line, index) => {
          gsap.from(line, {
            scaleX: 0,
            opacity: 0,
            duration: 1.2,
            delay: 1.6 + index * 0.15,
            ease: 'power2.out',
            transformOrigin: 'left center',
          });
        });
      }

      // Professional hover interactions
      const words = titleRef.current?.querySelectorAll('.word-wrapper');
      if (words) {
        words.forEach((word) => {
          word.addEventListener('mouseenter', () => {
            gsap.to(word, {
              y: -2,
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out',
            });
          });

          word.addEventListener('mouseleave', () => {
            gsap.to(word, {
              y: 0,
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  // Network node positions - precisely calculated for pixel-perfect alignment
  // Positioned to overlap/interact with specific letters in "Solutions IT"
  const nodes = [
    { label: 'Cloud', value: '99.9%', x: '5%', y: '8%' },      // Top-left, overlapping 'o' in Solutions
    { label: 'Speed', value: '2.1s', x: '7%', y: '92%' },       // Bottom-left
    { label: 'Security', value: '100%', x: '95%', y: '10%' },    // Top-right, next to blurred IT
    { label: 'Uptime', value: '24/7', x: '97%', y: '90%' },     // Bottom-right
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center"
    >
      {/* Network visualization - positioned absolutely around title */}
      <div
        ref={networkRef}
        className="absolute inset-0 pointer-events-none overflow-visible"
        aria-hidden="true"
      >
        {/* SVG Network lines - X pattern connecting nodes */}
        <svg 
          className="absolute inset-0 w-full h-full" 
          style={{ overflow: 'visible', zIndex: 1 }}
        >
          {/* Line from Cloud (top-left) to Security (top-right) */}
          <line
            className="network-line"
            x1="5%"
            y1="8%"
            x2="95%"
            y2="10%"
            stroke="rgba(59, 130, 246, 0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Line from Cloud (top-left) to Uptime (bottom-right) */}
          <line
            className="network-line"
            x1="5%"
            y1="8%"
            x2="97%"
            y2="90%"
            stroke="rgba(59, 130, 246, 0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Line from Speed (bottom-left) to Security (top-right) */}
          <line
            className="network-line"
            x1="7%"
            y1="92%"
            x2="95%"
            y2="10%"
            stroke="rgba(59, 130, 246, 0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Line from Speed (bottom-left) to Uptime (bottom-right) */}
          <line
            className="network-line"
            x1="7%"
            y1="92%"
            x2="97%"
            y2="90%"
            stroke="rgba(59, 130, 246, 0.35)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Network nodes - precisely positioned with fixed sizes */}
        {nodes.map((node, index) => (
          <div
            key={index}
            className="network-node absolute glass rounded-full backdrop-blur-md border border-primary/35 shadow-lg"
            style={{
              left: node.x,
              top: node.y,
              transform: 'translate(-50%, -50%)',
              width: '85px',
              height: '85px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem',
              zIndex: 10,
            }}
          >
            <div className="text-center w-full">
              <div className="text-[10px] md:text-xs lg:text-sm font-bold text-primary mb-0.5 md:mb-1 leading-tight">
                {node.label}
              </div>
              <div className="text-[9px] md:text-[10px] lg:text-xs text-foreground font-mono font-semibold">
                {node.value}
              </div>
            </div>
            {/* Subtle pulse ring */}
            <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping opacity-30"></div>
          </div>
        ))}
      </div>

      {/* Title text - centered with proper spacing */}
      <h1
        ref={titleRef}
        className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold tracking-tight text-foreground mb-12 leading-[1.05] z-20 text-center md:text-left w-full"
        aria-label={lines.join(' ')}
      >
        {lines.map((line, lineIndex) => {
          const isGradientLine = gradientWords.includes(lineIndex);
          const words = line.split(' ');

          return (
            <span key={lineIndex} className="title-line block mb-2 md:mb-3">
              {words.map((word, wordIndex) => {
                // Apply blur effect specifically to "IT" word
                const isBlurred = word === 'IT' && lineIndex === 0;
                
                return (
                  <span
                    key={wordIndex}
                    className="word-wrapper inline-block mr-2 md:mr-3"
                  >
                    <span
                      className={`inline-block transition-all ${
                        isGradientLine ? 'gradient-text' : ''
                      } ${isBlurred ? 'blur-md opacity-50' : ''}`}
                      style={isBlurred ? { filter: 'blur(8px)', WebkitFilter: 'blur(8px)' } : {}}
                    >
                      {word}
                    </span>
                    {wordIndex < words.length - 1 && (
                      <span className="inline-block w-2 md:w-3" />
                    )}
                  </span>
                );
              })}
            </span>
          );
        })}
      </h1>
    </div>
  );
}
