'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Floating particles
const floatingElements = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  delay: Math.random() * 2,
}));

export default function NotFound() {
  const containerRef = useRef<HTMLElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animated 404 number with scale and rotation
      if (numberRef.current) {
        gsap.from(numberRef.current, {
          opacity: 0,
          scale: 0.5,
          rotation: -180,
          duration: 1.2,
          ease: 'back.out(1.7)',
        });

        // Continuous subtle pulse
        gsap.to(numberRef.current, {
          scale: 1.05,
          opacity: 0.9,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1.5,
        });
      }

      // Title reveal
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('.title-word');
        gsap.from(words, {
          opacity: 0,
          y: 40,
          filter: 'blur(10px)',
          duration: 0.8,
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out',
        });
      }

      // Subtitle reveal
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: 0.6,
          ease: 'power2.out',
        });
      }

      // CTA button reveal
      if (ctaRef.current) {
        const buttons = ctaRef.current.querySelectorAll('a');
        gsap.from(buttons, {
          opacity: 0,
          y: 20,
          scale: 0.95,
          duration: 0.6,
          delay: 0.9,
          stagger: 0.1,
          ease: 'back.out(1.7)',
        });
      }

      // Floating particles animation
      if (particlesRef.current) {
        const particles = particlesRef.current.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
          const element = particle as HTMLElement;
          const delay = parseFloat(element.dataset.delay || '0');
          
          gsap.to(particle, {
            y: '+=40',
            x: '+=30',
            rotation: 360,
            duration: 10 + Math.random() * 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: delay,
          });
        });
      }

      // Background orbs animation
      const orbs = containerRef.current?.querySelectorAll('.gradient-orb');
      if (orbs) {
        orbs.forEach((orb, index) => {
          gsap.to(orb, {
            x: index === 0 ? 40 : -40,
            y: index === 0 ? -25 : 25,
            scale: 1.1,
            duration: 35,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 18,
          });
        });
      }

      // Floating geometric shapes
      const shapes = containerRef.current?.querySelectorAll('.floating-shape');
      if (shapes) {
        shapes.forEach((shape, index) => {
          gsap.to(shape, {
            y: index % 2 === 0 ? -25 : 25,
            x: index % 2 === 0 ? 20 : -20,
            rotation: index % 2 === 0 ? 20 : -20,
            duration: 7 + index,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.6,
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <section
        ref={containerRef}
        className="relative flex-1 flex flex-col justify-center items-center px-6 md:px-12 lg:px-16 pt-32 pb-20 md:pb-32 overflow-hidden"
      >
        {/* Rich gradient background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb absolute w-[700px] h-[700px] rounded-full bg-gradient-radial from-primary/25 via-primary/12 to-transparent blur-[130px] -top-[250px] -left-[150px] opacity-55" />
          <div className="gradient-orb absolute w-[600px] h-[600px] rounded-full bg-gradient-radial from-cyan-500/20 via-primary/10 to-transparent blur-[120px] -bottom-[180px] -right-[120px] opacity-45" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.025]" />
          
          <div className="absolute top-1/3 right-1/4 w-80 h-80 border border-primary/8 rounded-full blur-3xl opacity-25" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 border border-cyan-500/6 rounded-full blur-2xl opacity-20" />
        </div>

        {/* Floating particles */}
        <div
          ref={particlesRef}
          className="absolute inset-0 pointer-events-none z-5"
          aria-hidden="true"
        >
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="particle absolute rounded-full bg-primary/15 blur-sm"
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

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none z-5" aria-hidden="true">
          <div className="floating-shape absolute top-24 left-12 w-28 h-28 border border-primary/12 rounded-lg rotate-45 blur-sm opacity-25" />
          <div className="floating-shape absolute bottom-28 right-14 w-20 h-20 border border-cyan-500/10 rounded-full blur-sm opacity-20" />
          <div className="floating-shape absolute top-1/2 right-16 w-16 h-16 border border-primary/8 rounded-lg blur-sm opacity-15" />
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto w-full relative z-20 text-center">
          {/* Animated 404 number */}
          <div
            ref={numberRef}
            className="mb-8 md:mb-12"
          >
            <h1 className="text-[120px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-bold leading-none">
              <span className="gradient-text">404</span>
            </h1>
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 md:mb-8 leading-tight"
          >
            <span className="title-word block">Page</span>
            <span className="title-word block">
              <span className="gradient-text">Introuvable</span>
            </span>
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl lg:text-2xl text-muted max-w-2xl mx-auto leading-relaxed font-light mb-10 md:mb-12"
          >
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            Retournons à l'essentiel.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center"
          >
            <Link
              href="/"
              className="group relative px-10 md:px-12 py-5 md:py-6 bg-primary text-white font-bold text-lg md:text-xl rounded-full overflow-hidden transition-all hover:scale-[1.03] text-center shadow-2xl shadow-primary/40 hover:shadow-primary/60"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-cyan-500/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                Retour à l'accueil
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="group relative px-10 md:px-12 py-5 md:py-6 text-foreground font-bold text-lg md:text-xl border-2 border-primary/30 rounded-full hover:bg-primary/10 transition-all glass backdrop-blur-xl text-center hover:border-primary/50 hover:shadow-xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                Nous contacter
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

