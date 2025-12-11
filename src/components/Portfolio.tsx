'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiCloud, 
  HiShieldCheck, 
  HiShoppingCart, 
  HiVideoCamera, 
  HiChartBar, 
  HiSparkles,
  HiArrowRight,
  HiShieldCheck as ShieldIcon,
  HiTrendingUp,
  HiLightningBolt,
  HiStar
} from 'react-icons/hi';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Système Cloud Centralisé",
    category: "it",
    tag: "IT • Cloud Infrastructure",
    description: "Infrastructure cloud unifiée pour améliorer la collaboration et fluidifier les opérations multi-sites. Solution scalable et sécurisée adaptée aux entreprises modernes.",
    icon: HiCloud,
    color: "from-blue-500/30 to-cyan-500/30",
    metrics: "+10h gagnées par semaine",
    metricIcon: HiArrowRight,
  },
  {
    title: "Protection Multi-Niveaux",
    category: "cyber",
    tag: "Cybersécurité • Protection",
    description: "Protection à plusieurs niveaux, vulnérabilités réduites et surveillance continue renforcée. Système de défense en profondeur pour sécuriser vos données critiques.",
    icon: HiShieldCheck,
    color: "from-green-500/30 to-emerald-500/30",
    metrics: "Sécurité renforcée & risques réduits",
    metricIcon: ShieldIcon,
  },
  {
    title: "Plateforme E-commerce",
    category: "web",
    tag: "Web • E-commerce",
    description: "Marketplace moderne avec système de recommandation IA et paiement sécurisé. Expérience utilisateur optimisée pour maximiser les conversions et la satisfaction client.",
    icon: HiShoppingCart,
    color: "from-blue-500/30 to-cyan-500/30",
    metrics: "€2M+ de ventes",
    metricIcon: HiTrendingUp,
  },
  {
    title: "Campagne Vidéo Premium",
    category: "design",
    tag: "Video • Marketing",
    description: "Série de vidéos promotionnelles pour le lancement d'un produit SaaS B2B. Production cinématographique avec motion design et storytelling engageant.",
    icon: HiVideoCamera,
    color: "from-orange-500/30 to-red-500/30",
    metrics: "10M+ vues",
    metricIcon: HiTrendingUp,
  },
  {
    title: "Dashboard Analytique",
    category: "it",
    tag: "Data Science • Analytics",
    description: "Dashboard analytique avec visualisations interactives et prédictions ML en temps réel. Outil de décision basé sur les données pour optimiser les performances.",
    icon: HiChartBar,
    color: "from-indigo-500/30 to-blue-500/30",
    metrics: "99.9% uptime",
    metricIcon: HiLightningBolt,
  },
  {
    title: "Film de Marque Luxe",
    category: "design",
    tag: "Video • Luxury",
    description: "Film de marque haut de gamme avec effets cinématographiques et motion design premium. Identité visuelle sophistiquée pour positionner votre marque dans le luxe.",
    icon: HiSparkles,
    color: "from-yellow-500/30 to-amber-500/30",
    metrics: "Award winner",
    metricIcon: HiStar,
  },
];

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'it', label: 'IT & Cloud' },
  { id: 'cyber', label: 'Cybersécurité' },
  { id: 'web', label: 'Web & Apps' },
  { id: 'design', label: 'Design' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const descriptionRefs = useRef<Map<number, HTMLParagraphElement>>(new Map());

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      if (cards) {
        cards.forEach((card, index) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 50,
            scale: 0.9,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [filteredProjects]);

  const toggleCard = (index: number) => {
    const descriptionEl = descriptionRefs.current.get(index);
    if (!descriptionEl) return;

    const isExpanding = !expandedCards.has(index);
    
    if (isExpanding) {
      // Expand animation
      const startHeight = descriptionEl.offsetHeight;
      descriptionEl.style.maxHeight = 'none';
      const endHeight = descriptionEl.scrollHeight;
      descriptionEl.style.maxHeight = `${startHeight}px`;
      
      // Force reflow
      descriptionEl.offsetHeight;
      
      gsap.to(descriptionEl, {
        maxHeight: endHeight,
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out',
        onComplete: () => {
          descriptionEl.style.maxHeight = 'none';
        }
      });
    } else {
      // Collapse animation
      const currentHeight = descriptionEl.scrollHeight;
      descriptionEl.style.maxHeight = `${currentHeight}px`;
      
      // Force reflow
      descriptionEl.offsetHeight;
      
      gsap.to(descriptionEl, {
        maxHeight: '3.5rem',
        opacity: 0.85,
        duration: 0.5,
        ease: 'power2.in',
      });
    }

    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="gradient-text">Projets qui créent</span> de l'impact
          </h2>
          <p className="text-xl text-muted max-w-3xl">
            Découvrez comment nos solutions ont permis à nos clients
            d'avancer plus vite, plus loin et en toute confiance
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'glass text-foreground hover:bg-foreground/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 ">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            const MetricIconComponent = project.metricIcon;
            const isExpanded = expandedCards.has(index);
            const descriptionWords = project.description.split(' ');
            const shortDescription = descriptionWords.slice(0, 12).join(' ');
            const hasMoreText = descriptionWords.length > 12;

            return (
              <article
                key={index}
                className="project-card group glass rounded-2xl overflow-hidden cursor-pointer card-hover relative h-full flex flex-col"
                data-category={project.category}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:to-primary/8 transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-xl"></div>
                
                <div className="relative aspect-video overflow-hidden rounded-t-2xl flex-shrink-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-80 transition-all duration-500`}
                  />
                  <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <IconComponent className="w-20 h-20 md:w-24 md:h-24 text-white/90" />
                  </div>
                  <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
                    <span className="inline-block px-3 py-1.5 glass rounded-lg text-xs font-semibold text-foreground backdrop-blur-xl border border-glass-border">
                      {project.tag}
                    </span>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 relative flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors flex-shrink-0">
                    {project.title}
                  </h3>
                  
                  <div className="relative mb-4 flex-grow overflow-hidden">
                    <p 
                      ref={(el) => {
                        if (el) descriptionRefs.current.set(index, el);
                      }}
                      className={`text-muted leading-relaxed text-sm md:text-base ${
                        isExpanded ? '' : 'line-clamp-2'
                      }`}
                    >
                      {project.description}
                    </p>
                    
                    {hasMoreText && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        className="mt-3 text-primary text-xs font-semibold hover:text-primary/80 transition-all duration-200 flex items-center gap-1.5 group/read relative z-10"
                      >
                        <span className="relative">
                          {isExpanded ? 'Lire moins' : 'Lire plus'}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/read:w-full transition-all duration-300"></span>
                        </span>
                        <svg 
                          className={`w-3.5 h-3.5 transition-all duration-300 ${
                            isExpanded ? 'rotate-180' : 'group-hover/read:translate-y-0.5'
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    )}
                  </div>

                  <div className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 border border-primary/30 rounded-lg group-hover:bg-primary/20 group-hover:border-primary/50 transition-all flex-shrink-0">
                    <MetricIconComponent className="w-5 h-5 text-primary transform group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-primary">
                      {project.metrics}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold text-lg rounded-full hover:scale-105 transition-transform"
          >
            Discutons de votre projet
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
