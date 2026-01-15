'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Analyse',
    description: 'Audit complet de votre infrastructure et identification des opportunités.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    number: '02',
    title: 'Conception',
    description: 'Maquettes et prototypes pour valider la direction technique.',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    number: '03',
    title: 'Développement',
    description: 'Construction avec les technologies les plus performantes.',
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    number: '04',
    title: 'Lancement',
    description: 'Mise en ligne et accompagnement continu pour votre succès.',
    gradient: 'from-orange-500 to-amber-400',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.process-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: index * 0.15,
            ease: 'power3.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Notre Processus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-text">Comment</span> ça marche
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Une méthodologie éprouvée pour transformer vos idées en solutions performantes.
          </p>
        </div>

        {/* Steps grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card group bg-background border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 relative"
            >
              {/* Connector line (hidden on last item and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border z-10" />
              )}

              {/* Number badge */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mb-5`}>
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
