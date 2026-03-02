"use client";

import { motion } from "framer-motion";

export default function GeometricVisual() {
    return (
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center pointer-events-none perspective-[1200px]">

            {/* Base Layer: Sharp Geometry */}
            <motion.div
                animate={{
                    rotateX: [15, 375],
                    rotateY: [25, 385],
                    rotateZ: [0, 360],
                }}
                transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px]"
                style={{ transformStyle: "preserve-3d" }}
            >
                <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full geometry-glow"
                    fill="none"
                    stroke="rgba(37, 99, 235, 0.8)"
                    strokeWidth="0.8"
                    style={{ overflow: "visible" }}
                >
                    {/* Layer 1: Outer framing */}
                    <circle cx="100" cy="100" r="95" stroke="rgba(37,99,235,0.15)" strokeWidth="0.5" strokeDasharray="1 6" />
                    <circle cx="100" cy="100" r="90" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" className="dark:stroke-white stroke-black" />

                    {/* Layer 2: Geometric planes */}
                    <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" strokeWidth="0.8" stroke="rgba(37,99,235,0.4)" />
                    <polygon points="100,25 165,62 165,138 100,175 35,138 35,62" strokeWidth="0.5" stroke="rgba(255,255,255,0.12)" className="dark:stroke-white stroke-black" />
                    <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" strokeWidth="0.8" stroke="rgba(37,99,235,0.5)" />

                    {/* Layer 3: Intersecting structural diagonals */}
                    <line x1="22" y1="55" x2="178" y2="145" stroke="rgba(255,255,255,0.08)" className="dark:stroke-white stroke-black" />
                    <line x1="22" y1="145" x2="178" y2="55" stroke="rgba(255,255,255,0.08)" className="dark:stroke-white stroke-black" />
                    <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(37,99,235,0.3)" />
                    <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(37,99,235,0.2)" strokeDasharray="2 4" />

                    {/* Layer 4: Nodes (tiny dots at intersections) */}
                    <circle cx="100" cy="10" r="1.5" fill="rgba(255,255,255,0.8)" stroke="none" className="dark:fill-white fill-black" />
                    <circle cx="178" cy="55" r="1.5" fill="rgba(37,99,235,0.8)" stroke="none" />
                    <circle cx="178" cy="145" r="1.5" fill="rgba(255,255,255,0.8)" stroke="none" className="dark:fill-white fill-black" />
                    <circle cx="100" cy="190" r="1.5" fill="rgba(37,99,235,0.8)" stroke="none" />
                    <circle cx="22" cy="145" r="1.5" fill="rgba(255,255,255,0.8)" stroke="none" className="dark:fill-white fill-black" />
                    <circle cx="22" cy="55" r="1.5" fill="rgba(37,99,235,0.8)" stroke="none" />

                    {/* Inner Nodes */}
                    <circle cx="120" cy="70" r="2.5" fill="rgba(37,99,235,0.9)" stroke="none" className="drop-shadow-[0_0_2px_rgba(37,99,235,0.8)]" />
                    <circle cx="80" cy="130" r="2.5" fill="rgba(37,99,235,0.9)" stroke="none" className="drop-shadow-[0_0_2px_rgba(37,99,235,0.8)]" />
                    <circle cx="70" cy="65" r="1.5" fill="rgba(255,255,255,0.6)" stroke="none" className="dark:fill-white fill-black drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]" />
                    <circle cx="140" cy="140" r="1.5" fill="rgba(255,255,255,0.6)" stroke="none" className="dark:fill-white fill-black drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]" />
                    <circle cx="100" cy="100" r="1" fill="rgba(255,255,255,0.8)" stroke="none" className="dark:fill-white fill-black" />

                    {/* Connections */}
                    <path d="M 120,70 L 100,40 L 70,65 L 80,130 L 100,160 L 140,140 Z" stroke="rgba(37,99,235,0.4)" strokeWidth="0.8" fill="none" />
                    <path d="M 100,100 L 120,70 L 165,62 M 100,100 L 80,130 L 35,138 M 100,100 L 70,65 L 22,55 M 100,100 L 140,140 L 178,145" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" className="dark:stroke-white stroke-black" />

                    {/* Depth rings */}
                    <ellipse cx="100" cy="100" rx="90" ry="25" stroke="rgba(37,99,235,0.25)" strokeWidth="0.8" transform="rotate(30 100 100)" />
                    <ellipse cx="100" cy="100" rx="90" ry="25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" className="dark:stroke-white stroke-black" transform="rotate(-30 100 100)" />
                    <ellipse cx="100" cy="100" rx="90" ry="25" stroke="rgba(37,99,235,0.25)" strokeWidth="0.8" transform="rotate(90 100 100)" />
                </svg>
            </motion.div>

            {/* Layer 2: Duplicated Offset Geometry for 3D depth illusion */}
            <motion.div
                animate={{
                    rotateX: [15, 375],
                    rotateY: [25, 385],
                    rotateZ: [0, 360],
                }}
                transition={{
                    duration: 55, // Slightly different speed
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-20 blur-sm scale-110"
                style={{ transformStyle: "preserve-3d" }}
            >
                <svg
                    viewBox="0 0 200 200"
                    className="w-full h-full geometry-glow"
                    fill="none"
                    stroke="rgba(37, 99, 235, 0.8)"
                    strokeWidth="0.8"
                    style={{ overflow: "visible" }}
                >
                    <circle cx="100" cy="100" r="95" stroke="rgba(37,99,235,0.15)" strokeWidth="0.5" strokeDasharray="1 6" />
                    <polygon points="100,10 178,55 178,145 100,190 22,145 22,55" strokeWidth="0.8" stroke="rgba(37,99,235,0.4)" />
                    <polygon points="100,25 165,62 165,138 100,175 35,138 35,62" strokeWidth="0.5" stroke="rgba(255,255,255,0.12)" className="dark:stroke-white stroke-black" />
                    <polygon points="100,40 152,70 152,130 100,160 48,130 48,70" strokeWidth="0.8" stroke="rgba(37,99,235,0.5)" />
                    <line x1="22" y1="55" x2="178" y2="145" stroke="rgba(255,255,255,0.08)" className="dark:stroke-white stroke-black" />
                    <line x1="22" y1="145" x2="178" y2="55" stroke="rgba(255,255,255,0.08)" className="dark:stroke-white stroke-black" />
                    <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(37,99,235,0.3)" />
                    <path d="M 120,70 L 100,40 L 70,65 L 80,130 L 100,160 L 140,140 Z" stroke="rgba(37,99,235,0.4)" strokeWidth="0.8" fill="none" />
                    <ellipse cx="100" cy="100" rx="90" ry="25" stroke="rgba(37,99,235,0.25)" strokeWidth="0.8" transform="rotate(30 100 100)" />
                    <ellipse cx="100" cy="100" rx="90" ry="25" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" className="dark:stroke-white stroke-black" transform="rotate(-30 100 100)" />
                </svg>
            </motion.div>
        </div>
    );
}
