'use client';

import ScrollVelocityText from './ScrollVelocityText';

export default function ScrollShowcase() {
  return (
    <section className="py-16 bg-surface border-y border-border overflow-hidden">
      <div className="space-y-4">
        <ScrollVelocityText baseVelocity={-50} className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground/10 px-8">
          WEB DEVELOPMENT &bull; VIDEO EDITING &bull; AI SOLUTIONS &bull;&nbsp;
        </ScrollVelocityText>
        <ScrollVelocityText baseVelocity={50} className="text-4xl md:text-6xl lg:text-8xl font-bold text-primary/20 px-8">
          STRIVEHAWK &bull; INNOVATION &bull; EXCELLENCE &bull;&nbsp;
        </ScrollVelocityText>
      </div>
    </section>
  );
}
