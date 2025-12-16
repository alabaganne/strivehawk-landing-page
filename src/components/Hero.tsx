'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full px-6 md:px-8 min-h-screen overflow-hidden flex flex-col items-center justify-center
      bg-[linear-gradient(to_bottom,#000_0%,#0a0a0a_40%,#0d1929_75%,#1a365d_100%)]"
    >
      {/* Grid BG */}
      <div
        className="absolute inset-0 opacity-60 w-full
        bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)]
        bg-[size:4rem_4rem]
        [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Radial Accent Globe at bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2
        h-[400px] w-[200%] md:h-[500px] lg:h-[600px]
        rounded-t-[100%] border-t-2 border-primary/40
        bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,transparent_70%)]"
        style={{
          boxShadow: '0 -20px 80px rgba(59, 130, 246, 0.2), inset 0 2px 30px rgba(59, 130, 246, 0.1)',
        }}
      />

      {/* Content container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Eyebrow */}
        <a href="#services" className="group inline-block mb-8">
          <span
            className="text-sm text-gray-400 font-mono px-5 py-2
            bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent
            border-[2px] border-white/10
            rounded-3xl tracking-tight uppercase flex items-center justify-center
            hover:border-primary/30 transition-colors"
          >
            Votre Partenaire Digital
            <ChevronRight className="inline w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </a>

        {/* Title */}
        <h1
          className="animate-fade-in text-balance
          bg-gradient-to-br from-white from-30% to-white/40
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
          text-lg tracking-tight text-gray-400
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
            className="z-20 font-mono tracking-tight text-center text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary-hover shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all"
          >
            <Link href="/contact">
              Discutons de votre projet
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="z-20 font-mono tracking-tight text-center text-lg px-8 py-6 rounded-full border-2 border-white/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
          >
            <Link href="#portfolio">
              Voir nos réalisations
            </Link>
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
