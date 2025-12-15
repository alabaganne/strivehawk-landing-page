'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FadeIn from './FadeIn';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    title: 'Fiabilité',
    description: 'Nous restons à vos côtés à chaque étape.',
    icon: '🛡️',
  },
  {
    title: 'Innovation',
    description: 'Nous optimisons vos performances dans la durée.',
    icon: '💡',
  },
  {
    title: 'Résilience',
    description: 'Vos systèmes et vos équipes restent solides, même face aux imprévus.',
    icon: '🌱',
  },
];

export default function WhyStrivehawk() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.pillar-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
          });

          // Continuous subtle pulse on hover
          const icon = card.querySelector('.pillar-icon');
          if (icon) {
            card.addEventListener('mouseenter', () => {
              gsap.to(icon, {
                scale: 1.1,
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out',
              });
            });

            card.addEventListener('mouseleave', () => {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out',
              });
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-primary/5 to-transparent blur-3xl translate-y-1/2 translate-x-1/2" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
              Pourquoi Strivehawk ?
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              La technologie est puissante. Mais c'est{' '}
              <span className="gradient-text">l'humain</span> qui fait la différence.
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              Chez Strivehawk, nous croyons que la technologie ne vaut que si elle améliore la vie, simplifie le travail et renforce les relations humaines. C'est pourquoi nous développons des solutions centrées sur vos équipes, vos défis et votre réalité, pas seulement sur les systèmes.
            </p>
          </div>
        </FadeIn>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="pillar-card group glass rounded-2xl p-8 md:p-10 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 relative overflow-hidden cursor-pointer"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                {/* Icon with animation */}
                <div className="pillar-icon w-20 h-20 mx-auto mb-6 rounded-full glass border-2 border-primary/30 items-center justify-center flex bg-surface shadow-lg relative">
                  <span className="text-4xl">{pillar.icon}</span>
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-30"></div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

