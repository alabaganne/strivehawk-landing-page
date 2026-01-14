'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  HiCloud,
  HiShieldCheck,
  HiCalendar,
  HiGlobeAlt,
  HiSpeakerphone,
  HiColorSwatch,
  HiExternalLink,
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { IconType } from 'react-icons';

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  tag: string;
  description: string;
  icon: IconType;
  gradient: string;
  metrics: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: 'Système Cloud Centralisé',
    tag: 'IT • Cloud Infrastructure',
    description:
      'Nous avons déployé une infrastructure cloud unifiée pour améliorer la collaboration et fluidifier les opérations multi-sites. La transition a permis un accès plus rapide, à distance, fiable et sécurisé aux outils essentiels.',
    icon: HiCloud,
    gradient: 'from-blue-500 to-cyan-400',
    metrics: '+10h gagnées par semaine',
  },
  {
    title: 'Protection Cybersécurité Multi-Niveaux',
    tag: 'Cybersécurité • Protection',
    description:
      "Nous avons mis en place une protection à plusieurs niveaux, réduit les vulnérabilités critiques et renforcé la surveillance continue. L'entreprise bénéficie désormais d'un environnement de travail beaucoup plus sécurisé.",
    icon: HiShieldCheck,
    gradient: 'from-emerald-500 to-green-400',
    metrics: 'Sécurité renforcée & risques réduits',
  },
  {
    title: 'Application de Prise de Rendez-Vous sur mesure',
    tag: 'Solution Digitale • Web App & Automatisation',
    description:
      "Nous avons conçu une web app de réservation personnalisée avec gestion d'horaires complexes, multiples créneaux par jour, rappels automatiques, synchronisation interne et politique de no-show intégrée. Une solution digitale simple, fiable et pensée pour optimiser chaque minute.",
    icon: HiCalendar,
    gradient: 'from-violet-500 to-purple-400',
    metrics: 'Process digitalisé & réduction des no-shows',
    liveUrl: 'https://martinezautodetailwa.com/',
  },
  {
    title: 'Refonte de Site Web Moderne',
    tag: 'Web Design • UX/UI',
    description:
      "Nous avons transformé un site vieillissant en une plateforme rapide, responsive et orientée conversion. La nouvelle expérience utilisateur a augmenté l'engagement et facilité les demandes en ligne.",
    icon: HiGlobeAlt,
    gradient: 'from-orange-500 to-amber-400',
    metrics: '+35% de demandes en ligne',
  },
  {
    title: "Campagne d'Engagement Social",
    tag: 'Marketing Digital • Branding',
    description:
      "Nous avons conçu des visuels cohérents et une stratégie de contenu ciblée pour améliorer la portée et l'interaction. La campagne a renforcé la visibilité et généré une forte hausse de l'engagement.",
    icon: HiSpeakerphone,
    gradient: 'from-pink-500 to-rose-400',
    metrics: "+45% d'engagement",
  },
  {
    title: 'Identité de Marque Complète',
    tag: 'Design • Identité Visuelle',
    description:
      'Nous avons développé une identité visuelle cohérente — logo, couleurs, éléments graphiques — pour améliorer la crédibilité et la reconnaissance de la marque à travers tous ses supports.',
    icon: HiColorSwatch,
    gradient: 'from-indigo-500 to-blue-400',
    metrics: 'Identité harmonisée & crédibilité renforcée',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-32 px-6 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="gradient-text">Projets qui créent de l'impact,</span>{' '}
            concrètes, pensées pour les personnes
          </h2>
          <p className="text-lg text-muted max-w-3xl">
            Chaque projet Strivehawk part d'un besoin réel et se construit autour
            des personnes qui utilisent la technologie au quotidien. Notre
            objectif : simplifier le travail, améliorer l'organisation et soutenir
            une croissance durable.
          </p>
        </div>

        {/* Project cards */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = project.icon;

            return (
              <article
                key={index}
                className="project-card group bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Icon header */}
                <div
                  className={`relative h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Pattern overlay */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                      }}
                    />
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
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-5 flex-grow">
                    {project.description}
                  </p>

                  {/* Metrics & Links */}
                  <div className="pt-4 border-t border-border space-y-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.gradient}`}
                      />
                      <span className="text-sm font-semibold text-primary">
                        ➡ {project.metrics}
                      </span>
                    </div>

                    {/* Project Links */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex items-center gap-3">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                          >
                            <HiExternalLink className="w-3.5 h-3.5" />
                            Voir le projet
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-hover text-muted text-xs font-medium rounded-full hover:text-foreground border border-border hover:border-primary/40 transition-all duration-200"
                          >
                            <FaGithub className="w-3.5 h-3.5" />
                            GitHub
                          </a>
                        )}
                      </div>
                    )}
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
