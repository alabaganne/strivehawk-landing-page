'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const networkBadges = [
  { label: 'Cloud', value: '99.9%', x: 0, y: 0 },       
  { label: 'Security', value: '100%', x: 100, y: 0 },  
  { label: 'Speed', value: '2.1s', x: 0, y: 100 },    
  { label: 'Uptime', value: '24/7', x: 100, y: 100 }, 
];


const floatingElements = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
}));

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.title-word');
        gsap.from(words, {
          opacity: 0,
          y: 50,
          filter: 'blur(10px)',
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.4,
          ease: 'power2.out',
        });
      }

      if (ctaRef.current) {
        const buttons = ctaRef.current.querySelectorAll('a');
        gsap.from(buttons, {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.6,
          delay: 0.6,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        });
      }

      if (badgesRef.current) {
        const badges = badgesRef.current.querySelectorAll('.network-badge');
        badges.forEach((badge, index) => {
          gsap.from(badge, {
            opacity: 0,
            scale: 0,
            duration: 0.7,
            delay: 0.8 + index * 0.15,
            ease: 'back.out(1.7)',
          });

          gsap.to(badge, {
            scale: 1.05,
            opacity: 0.9,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: 1.5 + index * 0.2,
          });
        });
      }

      if (linesRef.current) {
        const lines = linesRef.current.querySelectorAll('.network-line');
        lines.forEach((line, index) => {
          gsap.from(line, {
            scaleX: 0,
            opacity: 0,
            duration: 1.2,
            delay: 1 + index * 0.1,
            ease: 'power2.out',
            transformOrigin: 'left center',
          });
        });
      }

      if (particlesRef.current) {
        const particles = particlesRef.current.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
          const element = particle as HTMLElement;
          const delay = parseFloat(element.dataset.delay || '0');
          
          gsap.to(particle, {
            y: '+=30',
            x: '+=20',
            rotation: 360,
            duration: 8 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: delay,
          });
        });
      }

      const orbs = heroRef.current?.querySelectorAll('.gradient-orb');
      if (orbs) {
        orbs.forEach((orb, index) => {
          gsap.to(orb, {
            x: index === 0 ? 50 : -50,
            y: index === 0 ? -30 : 30,
            scale: 1.1,
            duration: 30,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 15,
          });
        });
      }

      const shapes = heroRef.current?.querySelectorAll('.floating-shape');
      if (shapes) {
        shapes.forEach((shape, index) => {
          gsap.to(shape, {
            y: index % 2 === 0 ? -20 : 20,
            x: index % 2 === 0 ? 15 : -15,
            rotation: index % 2 === 0 ? 15 : -15,
            duration: 6 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-2 md:pb-32 overflow-hidden border-b border-border bg-background"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb absolute w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/30 via-primary/15 to-transparent blur-[140px] -top-[300px] -left-[200px] opacity-60" />
        <div className="gradient-orb absolute w-[700px] h-[700px] rounded-full bg-gradient-radial from-cyan-500/25 via-primary/12 to-transparent blur-[130px] -bottom-[200px] -right-[150px] opacity-50" />
        <div className="gradient-orb absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/20 via-cyan-500/10 to-transparent blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-primary/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 border border-cyan-500/8 rounded-full blur-2xl opacity-25" />
      </div>

      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none z-5"
        aria-hidden="true"
      >
        {floatingElements.map((element) => (
          <div
            key={element.id}
            className="particle absolute rounded-full bg-primary/20 blur-sm"
            style={{
              width: `${element.size}px`,
              height: `${element.size}px`,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            data-delay={element.delay}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none z-5" aria-hidden="true">
        <div className="floating-shape absolute top-20 left-10 w-32 h-32 border border-primary/15 rounded-lg rotate-45 blur-sm opacity-30" />
        <div className="floating-shape absolute bottom-32 right-16 w-24 h-24 border border-cyan-500/12 rounded-full blur-sm opacity-25" />
        <div className="floating-shape absolute top-1/2 right-20 w-20 h-20 border border-primary/10 rounded-lg blur-sm opacity-20" />
      </div>

      <div className="absolute inset-0 pointer-events-none z-10 m-6 md:m-0 lg:m-0" aria-hidden="true">
        <svg
          ref={linesRef}
          className="absolute inset-0 w-full h-full"
          style={{ overflow: 'visible' }}
        >
          <line
            className="network-line"
            x1="8%"
            y1="12%"
            x2="50%"
            y2="50%"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            className="network-line"
            x1="92%"
            y1="12%"
            x2="50%"
            y2="50%"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            className="network-line"
            x1="8%"
            y1="88%"
            x2="50%"
            y2="50%"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            className="network-line"
            x1="92%"
            y1="88%"
            x2="50%"
            y2="50%"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          
          <line
            className="network-line"
            x1="8%"
            y1="12%"
            x2="92%"
            y2="12%"
            stroke="rgba(59, 130, 246, 0.15)"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
          <line
            className="network-line"
            x1="8%"
            y1="88%"
            x2="92%"
            y2="88%"
            stroke="rgba(59, 130, 246, 0.15)"
            strokeWidth="1"
            strokeDasharray="2 2"
          />
        </svg>

        <div
          ref={badgesRef}
          className="absolute inset-0"
        >
          {networkBadges.map((badge, index) => (
            <div
              key={index}
              className="network-badge absolute glass rounded-full backdrop-blur-xl border border-primary/30 shadow-lg"
              style={{
                left: badge.x === 0 ? '8%' : '92%',
                top: badge.y === 0 ? '12%' : '88%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.75rem',
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)',
              }}
            >
              <div className="text-center">
                <div className="text-[10px] md:text-xs font-bold text-primary mb-0.5 leading-tight">
                  {badge.label}
                </div>
                <div className="text-[9px] md:text-[10px] text-foreground/90 font-mono font-semibold">
                  {badge.value}
                </div>
              </div>
              <div className="absolute inset-0 rounded-full border border-primary/40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-20">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-xs md:text-sm font-medium text-foreground mb-10 mt-0 ml-20 w-fit backdrop-blur-xl hover:bg-foreground/10 transition-all cursor-default group border border-primary/20 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>Solutions IT Premium</span>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold tracking-tight text-foreground mb-8 md:mb-10 leading-[1.05] max-w-5xl"
        >
          <span className="title-word block">Solutions IT</span>
          <span className="title-word block">
            Qui{' '}
            <span className="gradient-text relative">
              Créent
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/40 blur-sm"></span>
            </span>
          </span>
          <span className="title-word block">de l'Impact</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-muted max-w-3xl leading-relaxed font-light mb-12 md:mb-16"
        >
          Transformez votre infrastructure digitale avec des solutions
          sur-mesure, sécurisées et évolutives qui génèrent des résultats mesurables.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-5 md:gap-6"
        >
          <Link
            href="/contact"
            className="group relative px-10 md:px-12 py-5 md:py-6 bg-primary text-white font-bold text-lg md:text-xl rounded-full overflow-hidden transition-all hover:scale-[1.03] text-center shadow-2xl shadow-primary/40 hover:shadow-primary/60"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-3">
              Discutons de votre projet
              <svg
                className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Link>
          
          <Link
            href="#portfolio"
            className="group relative px-10 md:px-12 py-5 md:py-6 text-foreground font-bold text-lg md:text-xl border-2 border-primary/30 rounded-full hover:bg-primary/10 transition-all glass backdrop-blur-xl text-center hover:border-primary/50 hover:shadow-xl shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            
            <span className="relative z-10 flex items-center justify-center gap-3">
              Voir nos réalisations
              <svg
                className="w-6 h-6 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
