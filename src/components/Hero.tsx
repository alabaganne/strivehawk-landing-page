'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

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
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title lines
      const titleLines = titleRef.current?.querySelectorAll('.title-line');
      if (titleLines) {
        gsap.from(titleLines, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        });
      }

      // Floating cards animation
      const cards = cardsRef.current?.querySelectorAll('.floating-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.to(card, {
            y: -20,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Background orbs animation
      const orbs = heroRef.current?.querySelectorAll('.gradient-orb');
      if (orbs) {
        orbs.forEach((orb, index) => {
          gsap.to(orb, {
            x: index === 0 ? 50 : -50,
            y: -50,
            scale: 1.1,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 10,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden border-b border-border bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/30 to-transparent blur-[100px] -top-[200px] -left-[100px]" />
        <div className="gradient-orb absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-purple-500/30 to-transparent blur-[100px] -bottom-[150px] -right-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      <div className="max-w-[90rem] mx-auto w-full relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass text-sm font-medium text-foreground mb-12 w-fit backdrop-blur-sm hover:bg-foreground/10 transition-colors cursor-default">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Solutions IT Premium
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-foreground mb-12 leading-[0.85]"
        >
          <span className="title-line block">Solutions IT</span>
          <span className="title-line block gradient-text">Qui Créent</span>
          <span className="title-line block">de l'Impact</span>
        </h1>

        {/* Subtitle and CTAs */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 border-t border-border pt-12 mt-12">
          <p className="text-lg md:text-xl lg:text-2xl text-muted max-w-xl leading-relaxed font-light">
            Transformez votre infrastructure digitale avec des solutions
            sur-mesure, sécurisées et évolutives
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group relative px-6 md:px-8 py-3 md:py-4 bg-primary text-white font-bold text-base md:text-lg rounded-full overflow-hidden transition-transform hover:scale-105 text-center"
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
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="#portfolio"
              className="px-6 md:px-8 py-3 md:py-4 text-foreground font-bold text-base md:text-lg border border-border rounded-full hover:bg-foreground/5 transition-all glass text-center"
            >
              Voir nos réalisations
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Cards */}
      <div
        ref={cardsRef}
        className="absolute bottom-10 md:bottom-20 left-0 right-0 flex flex-wrap justify-center gap-4 md:gap-6 z-20 pointer-events-none px-4"
      >
        {floatingCards.map((card, index) => (
          <div
            key={index}
            className="floating-card glass rounded-2xl p-4 md:p-6 backdrop-blur-xl border border-glass-border min-w-[160px] md:min-w-[200px] pointer-events-auto hover:scale-105 transition-transform cursor-default"
            style={{ animationDelay: `${card.delay}s` }}
          >
            <div className="text-3xl md:text-4xl mb-2 md:mb-3">{card.icon}</div>
            <div className="text-xs md:text-sm font-semibold text-foreground mb-1">{card.label}</div>
            <div className="text-[10px] md:text-xs text-primary font-bold">{card.stat}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
