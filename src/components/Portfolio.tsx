'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Système Cloud Centralisé",
    category: "it",
    tag: "IT • Cloud Infrastructure",
    description: "Infrastructure cloud unifiée pour améliorer la collaboration et fluidifier les opérations multi-sites",
    image: "☁️",
    color: "from-blue-500/30 to-cyan-500/30",
    metrics: "+10h gagnées par semaine",
    icon: "→",
  },
  {
    title: "Protection Multi-Niveaux",
    category: "cyber",
    tag: "Cybersécurité • Protection",
    description: "Protection à plusieurs niveaux, vulnérabilités réduites et surveillance continue renforcée",
    image: "🔒",
    color: "from-green-500/30 to-emerald-500/30",
    metrics: "Sécurité renforcée & risques réduits",
    icon: "🛡️",
  },
  {
    title: "Plateforme E-commerce",
    category: "web",
    tag: "Web • E-commerce",
    description: "Marketplace moderne avec système de recommandation IA et paiement sécurisé",
    image: "🛒",
    color: "from-blue-500/30 to-cyan-500/30",
    metrics: "€2M+ de ventes",
    icon: "📈",
  },
  {
    title: "Campagne Vidéo Premium",
    category: "design",
    tag: "Video • Marketing",
    description: "Série de vidéos promotionnelles pour le lancement d'un produit SaaS B2B",
    image: "🎬",
    color: "from-orange-500/30 to-red-500/30",
    metrics: "10M+ vues",
    icon: "🎯",
  },
  {
    title: "Dashboard Analytique",
    category: "it",
    tag: "Data Science • Analytics",
    description: "Dashboard analytique avec visualisations interactives et prédictions ML en temps réel",
    image: "📊",
    color: "from-indigo-500/30 to-blue-500/30",
    metrics: "99.9% uptime",
    icon: "⚡",
  },
  {
    title: "Film de Marque Luxe",
    category: "design",
    tag: "Video • Luxury",
    description: "Film de marque haut de gamme avec effets cinématographiques et motion design premium",
    image: "✨",
    color: "from-yellow-500/30 to-amber-500/30",
    metrics: "Award winner",
    icon: "🏆",
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
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Filter Tabs */}
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

        {/* Projects Grid with unique staggered layout */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <article
              key={index}
              className="project-card group glass rounded-2xl overflow-hidden cursor-pointer card-hover relative"
              data-category={project.category}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Unique hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/15 group-hover:to-primary/8 transition-all duration-500 rounded-2xl opacity-0 group-hover:opacity-100 -z-10 blur-xl"></div>
              
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-80 transition-all duration-500`}
                />
                <div className="absolute inset-0 flex items-center justify-center text-7xl md:text-8xl transform group-hover:scale-110 transition-transform duration-500">
                  {project.image}
                </div>
                <div className="absolute top-0 left-0 right-0 p-4 md:p-6">
                  <span className="inline-block px-3 py-1.5 glass rounded-lg text-xs font-semibold text-foreground backdrop-blur-xl border border-glass-border">
                    {project.tag}
                  </span>
                </div>
                
                {/* Unique overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted leading-relaxed mb-4 line-clamp-2 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 border border-primary/30 rounded-lg group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                  <span className="text-lg transform group-hover:scale-110 transition-transform">
                    {project.icon}
                  </span>
                  <span className="text-sm font-semibold text-primary">
                    {project.metrics}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
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
