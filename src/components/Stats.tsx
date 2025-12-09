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
    <section ref={sectionRef} className="py-24 px-6 bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div ref={countersRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center glass rounded-2xl p-8">
              <div
                className="stat-number text-4xl md:text-6xl font-bold text-foreground mb-2 gradient-text"
                data-target={stat.value}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
