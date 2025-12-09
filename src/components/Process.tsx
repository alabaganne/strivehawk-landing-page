'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const process = [
  {
    number: '01',
    title: 'Analyse & Diagnostic',
    description: 'Audit complet de votre infrastructure actuelle, identification des opportunités et définition de la stratégie.',
  },
  {
    number: '02',
    title: 'Conception & Planification',
    description: 'Notre équipe crée des maquettes et prototypes interactifs pour valider la direction créative et technique.',
  },
  {
    number: '03',
    title: 'Développement & Implémentation',
    description: 'Nous construisons votre solution avec les technologies les plus performantes et modernes, en respectant les délais.',
  },
  {
    number: '04',
    title: 'Lancement & Suivi',
    description: 'Mise en ligne optimisée et accompagnement continu pour garantir votre succès et votre croissance.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current?.querySelectorAll('.timeline-item');
      if (items) {
        items.forEach((item, index) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
            Notre Processus
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            <span className="gradient-text">Comment</span> ça marche
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {process.map((step, index) => (
              <div
                key={index}
                className="timeline-item relative flex flex-col md:flex-row items-center gap-8"
              >
                {/* Timeline marker */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full glass border-2 border-primary flex items-center justify-center z-10">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 glass rounded-2xl p-8 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:ml-auto md:pl-16'
                  }`}
                >
                  <div className="text-6xl font-bold text-foreground/10 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
