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
    icon: '🔍',
  },
  {
    number: '02',
    title: 'Conception & Planification',
    description: 'Notre équipe crée des maquettes et prototypes interactifs pour valider la direction créative et technique.',
    icon: '📐',
  },
  {
    number: '03',
    title: 'Développement & Implémentation',
    description: 'Nous construisons votre solution avec les technologies les plus performantes et modernes, en respectant les délais.',
    icon: '⚙️',
  },
  {
    number: '04',
    title: 'Lancement & Suivi',
    description: 'Mise en ligne optimisée et accompagnement continu pour garantir votre succès et votre croissance.',
    icon: '🚀',
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
          const isEven = index % 2 === 0;
          
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            x: isEven ? -80 : 80,
            scale: 0.9,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
          });

          const marker = item.querySelector('.timeline-marker');
          if (marker) {
            gsap.from(marker, {
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
              scale: 0,
              rotation: -180,
              duration: 0.6,
              delay: index * 0.1 + 0.2,
              ease: 'back.out(1.7)',
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
            Notre Processus
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground">
            <span className="gradient-text">Comment</span> ça marche
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-primary opacity-20"></div>
            <div className="absolute inset-0 bg-border"></div>
          </div>

          <div className="space-y-16 md:space-y-24">
            {process.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="timeline-item relative flex flex-col md:flex-row items-start md:items-center gap-8 cursor-pointer"
                >
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full glass border-2 border-primary items-center justify-center z-10 bg-surface shadow-lg">
                    <span className="text-2xl">{step.icon}</span>
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-75"></div>
                  </div>

                  <div
                    className={`w-full md:w-[calc(50%-3.5rem)] glass rounded-2xl p-6 md:p-8 transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 ${
                      isEven ? 'md:mr-auto md:pr-4' : 'md:ml-auto md:pl-4'
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl md:text-6xl font-bold text-foreground/10 leading-none">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-muted leading-relaxed text-sm md:text-base">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        <span>Étape {index + 1} sur {process.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
