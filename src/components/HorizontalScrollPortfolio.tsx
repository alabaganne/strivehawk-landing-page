'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';

const projects = [
  {
    title: "NeoBank Platform",
    category: "Fintech",
    description: "Application bancaire moderne avec dashboard temps réel, gestion de portefeuille et paiements instantanés.",
    image: "💳",
    color: "from-blue-500/20 to-cyan-500/20",
    metrics: "+300% conversions"
  },
  {
    title: "FitLife AI Coach",
    category: "Health & IA",
    description: "Coach sportif intelligent utilisant le machine learning pour créer des programmes personnalisés.",
    image: "🏋️",
    color: "from-green-500/20 to-emerald-500/20",
    metrics: "50K+ utilisateurs"
  },
  {
    title: "EcoMarket",
    category: "E-commerce",
    description: "Marketplace éco-responsable avec système de recommandation IA et paiement sécurisé.",
    image: "🛒",
    color: "from-purple-500/20 to-pink-500/20",
    metrics: "€2M+ de ventes"
  },
  {
    title: "TechCorp Campaign",
    category: "Video",
    description: "Série de vidéos promotionnelles pour le lancement d'un produit SaaS B2B.",
    image: "🎬",
    color: "from-orange-500/20 to-red-500/20",
    metrics: "10M+ vues"
  },
  {
    title: "DataViz Pro",
    category: "Data Science",
    description: "Dashboard analytique avec visualisations interactives et prédictions ML en temps réel.",
    image: "📊",
    color: "from-indigo-500/20 to-blue-500/20",
    metrics: "99.9% uptime"
  },
  {
    title: "Luxury Brand Film",
    category: "Luxury",
    description: "Film de marque haut de gamme avec effets cinématographiques et motion design premium.",
    image: "✨",
    color: "from-yellow-500/20 to-amber-500/20",
    metrics: "Award winner"
  }
];

export default function HorizontalScrollPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.666%']);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);

  return (
    <section id="portfolio" ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        <div className="px-6 md:px-12 mb-8">
          <FadeIn>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">Projets qui font la différence</h2>
            <p className="text-xl text-muted max-w-3xl">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs.
            </p>
          </FadeIn>
        </div>

        <motion.div style={{ opacity }} className="relative">
          <motion.div
            style={{ x }}
            className="flex gap-8 pl-6 md:pl-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden border border-border bg-surface hover:border-primary/30 transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                  <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="text-7xl md:text-8xl mb-6 group-hover:scale-110 transition-transform duration-500 inline-block">
                        {project.image}
                      </div>
                      <span className="text-primary text-xs font-bold uppercase tracking-wider px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {project.category}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{project.title}</h3>
                      <p className="text-muted leading-relaxed mb-6 text-lg">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary font-bold">
                          {project.metrics}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
