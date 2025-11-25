'use client';

import FadeIn from './FadeIn';

const projects = [
  {
    title: "NeoBank Platform",
    category: "Fintech • Web App",
    description: "Application bancaire moderne avec dashboard temps réel, gestion de portefeuille et paiements instantanés.",
    image: "💳",
    color: "from-blue-500/30 to-cyan-500/30",
    metrics: "+300% conversions"
  },
  {
    title: "FitLife AI Coach",
    category: "Health • IA",
    description: "Coach sportif intelligent utilisant le machine learning pour créer des programmes personnalisés.",
    image: "🏋️",
    color: "from-green-500/30 to-emerald-500/30",
    metrics: "50K+ utilisateurs"
  },
  {
    title: "EcoMarket",
    category: "E-commerce",
    description: "Marketplace éco-responsable avec système de recommandation IA et paiement sécurisé.",
    image: "🛒",
    color: "from-purple-500/30 to-pink-500/30",
    metrics: "€2M+ de ventes"
  },
  {
    title: "TechCorp Campaign",
    category: "Video • Marketing",
    description: "Série de vidéos promotionnelles pour le lancement d'un produit SaaS B2B.",
    image: "🎬",
    color: "from-orange-500/30 to-red-500/30",
    metrics: "10M+ vues"
  },
  {
    title: "DataViz Pro",
    category: "Data Science",
    description: "Dashboard analytique avec visualisations interactives et prédictions ML en temps réel.",
    image: "📊",
    color: "from-indigo-500/30 to-blue-500/30",
    metrics: "99.9% uptime"
  },
  {
    title: "Luxury Brand Film",
    category: "Video • Luxury",
    description: "Film de marque haut de gamme avec effets cinématographiques et motion design premium.",
    image: "✨",
    color: "from-yellow-500/30 to-amber-500/30",
    metrics: "Award winner"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Projets qui font la différence</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs et dépasser leurs attentes.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative h-[400px] rounded-2xl overflow-hidden border border-black/5 bg-white hover:border-primary/30 transition-all duration-500 shadow-sm">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50 group-hover:opacity-70 transition-opacity duration-500`} />

                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </div>
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{project.category}</span>
                  </div>

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
                    <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-semibold">
                      {project.metrics}
                    </div>
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
