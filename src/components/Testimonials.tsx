'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Strivehawk a transformé notre présence en ligne. Le site qu'ils ont créé a augmenté nos conversions de 240% en 3 mois.",
    author: "Marie Dubois",
    role: "CEO, TechFlow",
    metric: "+240%",
    metricLabel: "conversions",
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    quote: "Une équipe exceptionnelle qui comprend vraiment les enjeux business. Leur expertise en IA nous a donné un avantage concurrentiel énorme.",
    author: "Thomas Laurent",
    role: "Directeur Marketing, DataCorp",
    metric: "Top 3",
    metricLabel: "du marché",
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    quote: "Le professionnalisme et la créativité de Strivehawk sont incomparables. Ils ont dépassé toutes nos attentes.",
    author: "Sophie Martin",
    role: "Fondatrice, CreativeHub",
    metric: "100%",
    metricLabel: "satisfaite",
    gradient: 'from-emerald-500 to-green-400',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.testimonial-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Témoignages
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Ce que disent <span className="gradient-text">nos clients</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Des entreprises qui nous font confiance et partagent leur expérience.
          </p>
        </div>

        {/* Testimonials grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${testimonial.gradient}`} />

              <div className="p-6">
                {/* Metric badge */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${testimonial.gradient}`}>
                    <span className="text-white font-bold text-lg">{testimonial.metric}</span>
                  </div>
                  <span className="text-sm text-muted">{testimonial.metricLabel}</span>
                </div>

                {/* Quote */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
