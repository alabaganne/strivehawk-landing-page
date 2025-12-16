'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: '50+',
    label: 'Projets livrés',
    description: 'Des solutions déployées avec succès pour des entreprises de toutes tailles.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    value: '98%',
    label: 'Satisfaction client',
    description: 'Nos clients recommandent nos services pour la qualité et le suivi.',
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    value: '10h',
    label: 'Économisées/semaine',
    description: 'En moyenne, grâce à l\'automatisation et l\'optimisation des processus.',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    value: '24/7',
    label: 'Support disponible',
    description: 'Une équipe réactive pour vous accompagner à tout moment.',
    gradient: 'from-orange-500 to-amber-400',
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.stat-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Nos Résultats
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Des chiffres qui <span className="gradient-text">parlent</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-all"
            >
              {/* Value with gradient bar */}
              <div className="mb-4">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${stat.gradient} mb-4`} />
                <div className="text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {stat.label}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
