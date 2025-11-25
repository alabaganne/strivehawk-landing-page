'use client';

import FadeIn from './FadeIn';

const stats = [
  { value: "150+", label: "Projets réalisés" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "5 ans", label: "D'expérience" },
  { value: "24/7", label: "Support disponible" }
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold text-foreground mb-2 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
