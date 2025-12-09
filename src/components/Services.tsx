'use client';

import FadeIn from './FadeIn';

const services = [
  {
    title: 'Développement Web',
    description: 'Sites web et applications performants construits avec Next.js, React et les technologies les plus modernes. Design responsive, SEO optimisé et performance maximale.',
    features: ['Sites vitrines', 'E-commerce', 'Applications SaaS', 'Progressive Web Apps'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    title: 'Montage Vidéo',
    description: 'Production vidéo professionnelle pour créateurs de contenu, entreprises et campagnes publicitaires. Du concept à la livraison finale.',
    features: ['Publicités', 'Contenu social', 'Vidéos corporate', 'Motion design'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    )
  },
  {
    title: 'Data Science & IA',
    description: 'Solutions d\'intelligence artificielle sur mesure pour automatiser vos processus et prendre des décisions data-driven.',
    features: ['Machine Learning', 'Analyse prédictive', 'Chatbots IA', 'Automatisation'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-20 max-w-3xl">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">Nos Services</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Des solutions complètes pour votre croissance</h2>
            <p className="text-xl text-muted">
              Nous combinons expertise technique et vision créative pour transformer vos idées en succès mesurables.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group glass rounded-2xl p-8 transition-all duration-500 hover:border-primary/30 hover:-translate-y-2 h-full flex flex-col card-hover">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted leading-relaxed mb-6 flex-grow">{service.description}</p>

                <div className="space-y-2 pt-6 border-t border-border">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
