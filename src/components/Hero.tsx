'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full px-6 md:px-8 min-h-screen overflow-hidden flex flex-col items-center justify-center bg-background"
    >
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-40 w-full
        bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]
        bg-[size:4rem_4rem]
        [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]"
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <a href="#services" className="group inline-block mb-8">
          <span
            className="text-sm text-muted font-mono px-5 py-2
            bg-gradient-to-tr from-foreground/5 via-foreground/5 to-transparent
            border border-border
            rounded-full tracking-tight uppercase flex items-center justify-center
            hover:border-primary/30 transition-colors"
          >
            Votre Partenaire Digital
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>

        {/* Title */}
        <h1
          className="animate-fade-in text-balance
          bg-gradient-to-b from-foreground to-foreground/60
          bg-clip-text py-4 text-5xl font-bold leading-none tracking-tighter
          text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Solutions qui
          <br />
          <span className="gradient-text">impactent</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in mt-6 mb-10 text-balance
          text-lg tracking-tight text-muted
          md:text-xl max-w-2xl"
          style={{ animationDelay: '0.2s' }}
        >
          Infrastructure digitale sur-mesure, sécurisée et évolutive.
          Nous transformons vos idées en solutions performantes.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <Button
            asChild
            className="font-mono tracking-tight text-center text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary-hover shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <Link href="/contact">
              Discutons de votre projet
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="font-mono tracking-tight text-center text-lg px-8 py-6 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
          >
            <Link href="#portfolio">
              Voir nos réalisations
            </Link>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Réponse sous 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Consultation gratuite</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>50+ projets livrés</span>
          </div>
        </div>
      </div>
    </section>
  );
}
