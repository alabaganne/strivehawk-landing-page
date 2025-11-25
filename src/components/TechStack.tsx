'use client';

import FadeIn from './FadeIn';

const stack = [
  { name: "Next.js", category: "Framework", icon: "⚡" },
  { name: "React", category: "Library", icon: "⚛️" },
  { name: "TypeScript", category: "Language", icon: "📘" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎨" },
  { name: "Node.js", category: "Backend", icon: "🟢" },
  { name: "Python", category: "AI/ML", icon: "🐍" },
  { name: "TensorFlow", category: "AI/ML", icon: "🧠" },
  { name: "AWS", category: "Cloud", icon: "☁️" },
];

export default function TechStack() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-4 block">Stack Technique</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Les technologies que nous maîtrisons
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Nous utilisons les outils les plus performants et modernes pour garantir la qualité de vos projets.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stack.map((tech, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="group relative">
                <div className="absolute -inset-px bg-gradient-to-b from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center gap-4 h-full min-h-[180px] shadow-sm dark:shadow-none">
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-foreground text-lg mb-1">{tech.name}</div>
                    <div className="text-sm text-muted">{tech.category}</div>
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
