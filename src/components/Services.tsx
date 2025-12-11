'use client';

import FadeIn from './FadeIn';

const services = [
  {
    title: 'Cloud & Accès Sécurisé à Distance',
    description: 'La flexibilité sans compromis sur la sécurité. Accédez à vos données et applications depuis n\'importe où, en toute sécurité.',
    features: ['Microsoft 365 & Azure Virtual Desktop', 'VPN & accès sécurisé', 'Sauvegardes & reprise après sinistre', 'Gestion des licences et stockage cloud'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
        <path d="M14 16h-4"></path>
        <path d="M12 8v8"></path>
      </svg>
    )
  },
  {
    title: 'Cybersécurité & Conformité',
    description: 'Une protection complète pour vos données. Prévenez les menaces et protégez la confiance de vos clients.',
    features: ['Firewalls, antivirus & sécurité endpoint', 'Protection email & prévention phishing', 'Conformité HIPAA, PCI-DSS, RGPD', 'Audit & formation sécurité'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    )
  },
  {
    title: 'Digitalisation & Automatisation',
    description: 'Simplifiez vos processus et gagnez du temps. Des outils qui travaillent pour vous.',
    features: ['Création de sites & identité de marque', 'Automatisation CRM & email marketing', 'Intégrations (Zoho, QuickBooks, Shopify...)', 'Optimisation des workflows internes'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    )
  },
  {
    title: 'Infrastructures & Support IT',
    description: 'Une assistance proactive, un système toujours disponible. Nous restons à vos côtés à chaque étape.',
    features: ['Supervision & help desk', 'Gestion d\'appareils, imprimantes et Wi-Fi', 'Mises à jour & maintenance Windows', 'Dépannage sur site et à distance'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    title: 'Développement Web, Mobile & IA',
    description: 'Des solutions intelligentes et évolutives, sur mesure pour votre entreprise.',
    features: ['Applications web & mobiles', 'Landing pages & bases de données', 'Intégration de chatbots IA', 'Solutions sur mesure'],
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
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">Nos Expertises</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Des solutions conçues pour faire grandir votre entreprise</h2>
            <p className="text-xl text-muted">
              De la gestion IT à la cybersécurité, du cloud à la transformation digitale, Strivehawk vous aide à évoluer sereinement, avec des solutions sur mesure et humaines.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group glass rounded-2xl p-6 md:p-8 transition-all duration-500 hover:border-primary/50 hover:-translate-y-2 h-full flex flex-col card-hover relative overflow-hidden cursor-pointer min-h-[400px] md:min-h-[450px]">
                {/* Unique background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-2xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors flex-shrink-0">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6 flex-grow text-sm md:text-base">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 pt-6 border-t border-border mt-auto flex-shrink-0">
                    {service.features.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2.5 text-sm text-muted group-hover:text-foreground/80 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
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
