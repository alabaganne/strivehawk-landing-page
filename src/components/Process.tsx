'use client';

import FadeIn from './FadeIn';

const process = [
  {
    number: "01",
    title: "Découverte",
    description: "Nous analysons vos besoins, votre marché et vos objectifs pour définir une stratégie sur mesure."
  },
  {
    number: "02",
    title: "Conception",
    description: "Notre équipe crée des maquettes et prototypes interactifs pour valider la direction créative."
  },
  {
    number: "03",
    title: "Développement",
    description: "Nous construisons votre solution avec les technologies les plus performantes et modernes."
  },
  {
    number: "04",
    title: "Lancement & Suivi",
    description: "Mise en ligne optimisée et accompagnement continu pour garantir votre succès."
  }
];

export default function Process() {
  return (
    <section className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">Notre Processus</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Comment nous travaillons</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-background border border-border rounded-2xl p-8 h-full hover:border-primary/20 transition-colors shadow-sm dark:shadow-none">
                  <div className="text-6xl font-bold text-foreground/10 group-hover:text-foreground/20 mb-4 transition-colors">{step.number}</div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
