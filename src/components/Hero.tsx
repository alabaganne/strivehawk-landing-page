'use client';

import Link from 'next/link';
import FadeIn from './FadeIn';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 overflow-hidden border-b border-border bg-background">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3 opacity-50" />

      <div className="max-w-[90rem] mx-auto w-full relative z-10">
        <FadeIn delay={0.1}>
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 text-sm font-medium text-foreground mb-12 w-fit backdrop-blur-sm hover:bg-foreground/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Agence Digitale Premium
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-foreground mb-12 leading-[0.85]">
            TRANSFORMEZ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-foreground/80 to-foreground/50">
              VOTRE VISION.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 border-t border-border pt-12 mt-12">
            <p className="text-xl md:text-2xl text-muted max-w-xl leading-relaxed font-light">
              Strivehawk est le partenaire stratégique des entreprises ambitieuses.
              Nous fusionnons design, technologie et intelligence artificielle pour créer des impacts mesurables.
            </p>

            <div className="flex gap-6 shrink-0">
              <Link href="/contact" className="group relative px-8 py-4 bg-primary text-white font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105">
                <span className="relative z-10">Démarrer un projet</span>
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link href="#portfolio" className="px-8 py-4 text-foreground font-bold text-lg border border-border rounded-full hover:bg-foreground/5 transition-all">
                Nos Réalisations
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
