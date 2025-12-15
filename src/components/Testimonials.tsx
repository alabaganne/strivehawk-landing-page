'use client';

import FadeIn from './FadeIn';

const testimonials = [
  {
    quote: "Strivehawk a transformé notre présence en ligne. Le site qu'ils ont créé a augmenté nos conversions de 240% en 3 mois.",
    author: "Marie Dubois",
    role: "CEO, TechFlow",
    avatar: "MD"
  },
  {
    quote: "Une équipe exceptionnelle qui comprend vraiment les enjeux business. Leur expertise en IA nous a donné un avantage concurrentiel énorme.",
    author: "Thomas Laurent",
    role: "Directeur Marketing, DataCorp",
    avatar: "TL"
  },
  {
    quote: "Le professionnalisme et la créativité de Strivehawk sont incomparables. Ils ont dépassé toutes nos attentes.",
    author: "Sophie Martin",
    role: "Fondatrice, CreativeHub",
    avatar: "SM"
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">Témoignages</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ce que disent nos clients</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 h-full flex flex-col shadow-sm dark:shadow-none cursor-pointer">
                <div className="flex-grow">
                  <div className="text-primary text-4xl mb-6">&quot;</div>
                  <p className="text-muted leading-relaxed mb-8 text-lg">
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
