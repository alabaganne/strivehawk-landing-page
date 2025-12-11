'use client';

import FadeIn from './FadeIn';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiPython, 
  SiTensorflow, 
  SiAmazon 
} from 'react-icons/si';

const stack = [
  { 
    name: "Next.js", 
    category: "Framework", 
    icon: SiNextdotjs,
    color: "text-black dark:text-white"
  },
  { 
    name: "React", 
    category: "Library", 
    icon: SiReact,
    color: "text-[#61DAFB]"
  },
  { 
    name: "TypeScript", 
    category: "Language", 
    icon: SiTypescript,
    color: "text-[#3178C6]"
  },
  { 
    name: "Tailwind CSS", 
    category: "Styling", 
    icon: SiTailwindcss,
    color: "text-[#06B6D4]"
  },
  { 
    name: "Node.js", 
    category: "Backend", 
    icon: SiNodedotjs,
    color: "text-[#339933]"
  },
  { 
    name: "Python", 
    category: "AI/ML", 
    icon: SiPython,
    color: "text-[#3776AB]"
  },
  { 
    name: "TensorFlow", 
    category: "AI/ML", 
    icon: SiTensorflow,
    color: "text-[#FF6F00]"
  },
  { 
    name: "AWS", 
    category: "Cloud", 
    icon: SiAmazon,
    color: "text-[#FF9900]"
  },
];

export default function TechStack() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
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
          {stack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="group relative cursor-pointer h-full">
                  <div className="absolute -inset-px bg-gradient-to-b from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-8 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-all duration-300 flex flex-col items-center justify-center gap-4 h-full min-h-[200px] md:min-h-[220px] shadow-sm dark:shadow-none">
                    <div className={`${tech.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <IconComponent className="w-12 h-12 md:w-16 md:h-16" />
                    </div>
                    <div className="text-center flex-shrink-0">
                      <div className="font-bold text-foreground text-lg mb-1 line-clamp-1">{tech.name}</div>
                      <div className="text-sm text-muted line-clamp-1">{tech.category}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
