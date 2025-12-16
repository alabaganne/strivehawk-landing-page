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
    tag: "IT • Cloud",
    description: "Infrastructure cloud unifiée pour améliorer la collaboration et fluidifier les opérations multi-sites.",
    icon: HiCloud,
    gradient: "from-blue-500 to-cyan-400",
    metrics: "+10h gagnées/semaine",
    metricIcon: HiTrendingUp,
  },
  {
    title: "Protection Multi-Niveaux",
    category: "cyber",
    tag: "Cybersécurité",
    description: "Protection à plusieurs niveaux avec surveillance continue renforcée pour sécuriser vos données.",
    icon: HiShieldCheck,
    gradient: "from-emerald-500 to-green-400",
    metrics: "Risques réduits",
    metricIcon: ShieldIcon,
  },
  {
    title: "Plateforme E-commerce",
    category: "web",
    tag: "Web • E-commerce",
    description: "Marketplace moderne avec système de recommandation IA et paiement sécurisé.",
    icon: HiShoppingCart,
    gradient: "from-violet-500 to-purple-400",
    metrics: "€2M+ de ventes",
    metricIcon: HiTrendingUp,
  },
  {
    title: "Campagne Vidéo Premium",
    category: "design",
    tag: "Video • Marketing",
    description: "Série de vidéos promotionnelles avec motion design et storytelling engageant.",
    icon: HiVideoCamera,
    gradient: "from-orange-500 to-amber-400",
    metrics: "10M+ vues",
    metricIcon: HiTrendingUp,
  },
  {
    title: "Dashboard Analytique",
    category: "it",
    tag: "Data • Analytics",
    description: "Dashboard avec visualisations interactives et prédictions ML en temps réel.",
    icon: HiChartBar,
    gradient: "from-indigo-500 to-blue-400",
    metrics: "99.9% uptime",
    metricIcon: HiLightningBolt,
  },
  {
    title: "Film de Marque Luxe",
    category: "design",
    tag: "Video • Luxury",
    description: "Film de marque haut de gamme avec effets cinématographiques premium.",
    icon: HiSparkles,
    gradient: "from-amber-500 to-yellow-400",
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
  }, [filteredProjects]);

  return (
    <section id="portfolio" ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="gradient-text">Projets qui créent</span> de l'impact
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Découvrez comment nos solutions ont permis à nos clients d'avancer plus vite et en toute confiance.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/25'
                  : 'bg-surface border border-border text-muted hover:text-foreground hover:border-primary/40'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            const MetricIconComponent = project.metricIcon;

            return (
              <article
                key={index}
                className="project-card group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Icon header */}
                <div className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                      backgroundSize: '24px 24px'
                    }} />
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <IconComponent className="w-16 h-16 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                      <MetricIconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {project.metrics}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Discutons de votre projet
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
