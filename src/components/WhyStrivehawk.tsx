'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    title: 'Fiabilité',
    description: 'Un partenaire sur qui compter à chaque étape de votre transformation digitale.',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Innovation',
    description: 'Des solutions modernes qui anticipent vos besoins de demain.',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    title: 'Proximité',
    description: 'Une équipe à votre écoute, qui comprend votre réalité terrain.',
    gradient: 'from-emerald-500 to-green-400',
  },
];

export default function WhyStrivehawk() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.value-card');
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
    <section ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Pourquoi Strivehawk
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              La technologie est puissante. <span className="gradient-text">L'humain</span> fait la différence.
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Nous croyons que la technologie doit simplifier le travail et renforcer les relations humaines. C'est pourquoi nos solutions sont centrées sur vos équipes et votre réalité.
            </p>

            {/* Key point */}
            <div className="flex items-start gap-4 p-4 bg-surface border border-border rounded-xl">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xl">✓</span>
              </div>
              <div>
                <div className="font-semibold text-foreground mb-1">Approche sur mesure</div>
                <p className="text-sm text-muted">
                  Chaque solution est adaptée à vos défis spécifiques, pas une approche générique.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Value cards */}
          <div ref={cardsRef} className="space-y-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card group flex items-start gap-4 p-5 bg-surface border border-border rounded-xl hover:border-primary/30 transition-all"
              >
                {/* Number */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">0{index + 1}</span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
