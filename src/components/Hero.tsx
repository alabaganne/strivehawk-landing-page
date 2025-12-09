'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import InteractiveTitle from './InteractiveTitle';

const floatingCards = [
  {
    icon: '☁️',
    label: 'Cloud Infrastructure',
    stat: '+10h/semaine',
    delay: 0,
  },
  {
    icon: '🔒',
    label: 'Cybersécurité',
    stat: 'Risques réduits',
    delay: 0.3,
  },
  {
    icon: '⚡',
    label: 'Automatisation',
    stat: '-40% no-shows',
    delay: 0.6,
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle floating animation for cards
      const cards = cardsRef.current?.querySelectorAll('.floating-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: -15,
            duration: 3 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Subtle background orb animation
      const orbs = heroRef.current?.querySelectorAll('.gradient-orb');
      if (orbs) {
        orbs.forEach((orb, index) => {
          gsap.to(orb, {
            x: index === 0 ? 40 : -40,
            y: index === 0 ? -30 : 30,
            scale: 1.05,
            duration: 30,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 15,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-40 md:pb-32 overflow-hidden border-b border-border bg-background"
    >
      {/* Background - blue only, no purple */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/25 via-primary/15 to-transparent blur-[120px] -top-[200px] -left-[100px] opacity-50" />
        <div className="gradient-orb absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/20 via-primary/10 to-transparent blur-[100px] -bottom-[150px] -right-[100px] opacity-40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-primary/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 border border-primary/6 rounded-full blur-2xl" />
      </div>

      <div className="max-w-[90rem] mx-auto w-full relative z-10 mb-40">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm font-medium text-foreground mb-12 w-fit backdrop-blur-sm hover:bg-foreground/10 transition-all cursor-default group">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="relative">
            Solutions IT Premium
            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </span>
        </div>

        {/* Professional Interactive Title */}
        <InteractiveTitle
          lines={['Solutions IT', 'Qui Créent', 'de l\'Impact']}
          gradientWords={[1]}
        />

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 border-t border-border pt-12 mt-12">
          <p className="text-lg md:text-xl lg:text-2xl text-muted max-w-xl leading-relaxed font-light">
            Transformez votre infrastructure digitale avec des solutions
            sur-mesure, sécurisées et évolutives
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-bold text-base md:text-lg rounded-full overflow-hidden transition-all hover:scale-[1.02] text-center shadow-lg shadow-primary/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Discutons de votre projet
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-primary/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="#portfolio"
              className="px-6 md:px-8 py-3 md:py-4 text-foreground font-bold text-base md:text-lg border border-border rounded-full hover:bg-foreground/5 transition-all glass text-center hover:border-primary/50"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>

      <div
        ref={cardsRef}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 gap-y-6 md:gap-y-0 md:gap-6 z-20 pointer-events-none px-4 w-full max-w-7xl"
      >
        {floatingCards.map((card, index) => (
          <div
            key={index}
            className="floating-card glass rounded-2xl p-4 md:p-6 backdrop-blur-xl border border-glass-border min-w-[160px] md:min-w-[200px] max-w-[200px] pointer-events-auto hover:border-primary/50 transition-all cursor-default relative overflow-hidden group"
            style={{ animationDelay: `${card.delay}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/8 group-hover:to-primary/5 transition-all duration-500 rounded-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-3xl md:text-4xl mb-2 md:mb-3 transform group-hover:scale-105 transition-transform duration-300">
                {card.icon}
              </div>
              <div className="text-xs md:text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {card.label}
              </div>
              <div className="text-[10px] md:text-xs text-primary font-bold">
                {card.stat}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
