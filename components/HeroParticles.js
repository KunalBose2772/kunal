"use client";

import { useMemo } from "react";

const PARTICLE_COUNT = 36;

export default function HeroParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }).map((_, index) => {
        const seed = index + 1;
        const top = 5 + ((seed * 17) % 80); // 5% - 85%
        const left = (seed * 29) % 100; // 0% - 99%
        const size = 2 + ((seed * 13) % 6); // 2px - 7px
        const duration = 10 + ((seed * 19) % 8); // 10s - 17s
        const delay = ((seed * 23) % 20) * -0.5; // negative stagger

        return {
          id: index,
          top: `${top}%`,
          left: `${left}%`,
          size: `${size}px`,
          duration: `${duration}s`,
          delay: `${delay}s`,
        };
      }),
    []
  );

  return (
    <div className="hero-particles">
      {particles.map((p) => (
        <span
          key={p.id}
          className="hero-particle hero-particle-anim"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}

