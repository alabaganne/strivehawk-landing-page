'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 50, suffix: '+', label: 'Projets livrés' },
  { value: 98, suffix: '%', label: 'Satisfaction client' },
  { value: 10, suffix: 'h', label: 'Heures économisées/semaine' },
  { value: 24, suffix: '/7', label: 'Support disponible' },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = countersRef.current?.querySelectorAll('.stat-number');
      if (counters) {
        counters.forEach((counter) => {
          const target = parseInt(counter.getAttribute('data-target') || '0');
          const suffix = counter.getAttribute('data-suffix') || '';

          gsap.to(counter, {
            scrollTrigger: {
              trigger: counter,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            onUpdate: function () {
              const value = Math.ceil(this.targets()[0].innerText);
              counter.textContent = value + suffix;
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-surface border-b border-border relative overflow-hidden">
      {/* Unique background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={countersRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-105 hover:border-primary/50 group relative overflow-hidden cursor-pointer h-full min-h-[160px] md:min-h-[180px] flex flex-col justify-center"
            >
              {/* Unique glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div
                  className="stat-number text-4xl md:text-6xl font-bold text-foreground mb-2 gradient-text"
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-muted font-medium group-hover:text-foreground transition-colors line-clamp-2">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
