"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "Strivehawk est un partenaire exceptionnel pour notre entreprise. Ils nous ont aidés à moderniser notre infrastructure informatique et à améliorer considérablement notre présence en ligne. Leur équipe est réactive, compétente et très agréable à côtoyer. Leur approche globale nous a permis de gagner du temps et d'éviter bien des tracas, et leur assistance continue est d'une grande fiabilité. Nous les recommandons vivement si vous recherchez un partenaire technologique de confiance.",
    author: "Kran Malik",
    role: "Client",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    quote:
      "Strivehawk a révolutionné notre système informatique. Réactivité, surveillance proactive et support sans incident. Ils ont renforcé notre sécurité, rationalisé nos outils cloud et nous ont fait gagner des heures chaque semaine. Communication claire, prix justes et résultats tangibles. Je recommande vivement !",
    author: "Brian Horton",
    role: "Tire Nation Point S & Auto Service",
    gradient: "from-violet-500 to-purple-400",
  },
  {
    quote:
      "Cette équipe nous a aidés à concevoir notre site web, nos réseaux sociaux, nos contenus graphiques, notre messagerie professionnelle et la configuration de notre système de point de vente afin de simplifier la prise de rendez-vous pour nos clients. L'équipe se surpasse pour fournir un excellent service pour nos services d'esthétique automobile à Centralia, et nous en sommes très satisfaits et reconnaissants. Nous les recommandons sans hésiter à toute entreprise pour ses besoins technologiques.",
    author: "Martinez Auto Detail",
    role: "Services d'esthétique automobile",
    gradient: "from-emerald-500 to-green-400",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".testimonial-card");
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power3.out",
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
            <div>
              <div
                key={index}
                className="testimonial-card group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Gradient top bar */}
                <div className={`h-1 bg-gradient-to-r ${testimonial.gradient}`} />

                <div className="p-6">
                  {/* Quote icon */}
                  <div
                    className={`w-10 h-10 rounded-lg bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center mb-4`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote */}
                  <p className="text-foreground leading-relaxed mb-6 text-sm">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-muted">{testimonial.role}</div>
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
