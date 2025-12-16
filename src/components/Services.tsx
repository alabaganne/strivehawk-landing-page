'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Cloud & Infrastructure',
    description: 'Accédez à vos données depuis n\'importe où, en toute sécurité.',
    features: ['Microsoft 365 & Azure', 'VPN & accès sécurisé', 'Sauvegardes cloud', 'Gestion des licences'],
    icon: '☁️',
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Cybersécurité',
    description: 'Protection complète pour vos données et la confiance de vos clients.',
    features: ['Firewalls & antivirus', 'Protection email', 'Conformité RGPD', 'Audit sécurité'],
    icon: '🔐',
    gradient: 'from-emerald-500 to-green-400',
  },
  {
    title: 'Digitalisation',
    description: 'Simplifiez vos processus avec des outils qui travaillent pour vous.',
    features: ['Sites web & branding', 'Automatisation CRM', 'Intégrations', 'Workflows optimisés'],
    icon: '⚡',
    gradient: 'from-violet-500 to-purple-400',
  },
  {
    title: 'Support IT',
    description: 'Assistance proactive et système toujours disponible.',
    features: ['Help desk 24/7', 'Gestion appareils', 'Maintenance', 'Dépannage'],
    icon: '🛠️',
    gradient: 'from-orange-500 to-amber-400',
  },
  {
    title: 'Développement',
    description: 'Solutions intelligentes et évolutives sur mesure.',
    features: ['Apps web & mobile', 'Landing pages', 'Chatbots IA', 'Solutions custom'],
    icon: '💻',
    gradient: 'from-indigo-500 to-blue-400',
  },
  {
    title: 'Vidéo & Design',
    description: 'Créations visuelles premium pour votre marque.',
    features: ['Motion design', 'Montage vidéo', 'Identité visuelle', 'Publicités'],
    icon: '🎬',
    gradient: 'from-pink-500 to-rose-400',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 40,
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
    <section id="services" ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Nos Expertises
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-text">Solutions</span> pour votre croissance
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            De la gestion IT à la cybersécurité, des solutions sur mesure pour évoluer sereinement.
          </p>
        </div>

        {/* Services grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />

              <div className="p-6">
                {/* Icon and title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-border">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
