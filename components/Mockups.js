"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const CARDS = [
    {
        id: "profile",
        label: "Kunal Portrait",
        src: "/kunal.jpeg",
    },
    {
        id: "project1",
        label: "Feature-Rich Web Application",
        src: "/project1.png",
    },
    {
        id: "saas",
        label: "SaaS Platform Interface",
        src: "/project2.png",
    },
    {
        id: "webapp",
        label: "Product Experience",
        src: "/project1.png",
    },
];

export default function Mockups() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % CARDS.length);
        }, 5200);
        return () => clearInterval(interval);
    }, []);

    const positionedCards = useMemo(() => {
        return CARDS.map((card, index) => {
            const offset = (index - activeIndex + CARDS.length) % CARDS.length;

            if (offset === 0) {
                return {
                    ...card,
                    offset,
                    zIndex: 40,
                    translateX: 0,
                    translateY: 0,
                    scale: 1,
                    opacity: 1,
                };
            }

            if (offset === 1) {
                return {
                    ...card,
                    offset,
                    zIndex: 30,
                    translateX: 36,
                    translateY: 18,
                    scale: 0.96,
                    opacity: 0.88,
                };
            }

            if (offset === 2) {
                return {
                    ...card,
                    offset,
                    zIndex: 20,
                    translateX: 64,
                    translateY: 32,
                    scale: 0.9,
                    opacity: 0.6,
                };
            }

            return {
                ...card,
                offset,
                zIndex: 10,
                translateX: 80,
                translateY: 40,
                scale: 0.86,
                opacity: 0,
            };
        });
    }, [activeIndex]);

    return (
        <div className="relative w-full max-w-[680px] h-[460px] md:h-[520px] flex items-center justify-end lg:justify-center pointer-events-none">
            {/* Soft background glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-brand-accent/18 via-transparent to-brand-accent/8 blur-3xl opacity-80" />

            <div className="relative w-[92%] md:w-full h-[340px] md:h-[400px]">
                {positionedCards.map((card) => (
                    <motion.div
                        key={card.id}
                        className="absolute inset-0 origin-center"
                        style={{ zIndex: card.zIndex }}
                        animate={{
                            x: card.translateX,
                            y: card.translateY,
                            scale: card.scale,
                            opacity: card.opacity,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <div className="relative w-full h-full rounded-2xl border border-slate-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)] dark:border-white/10 dark:bg-slate-900/95 dark:shadow-[0_25px_60px_rgba(0,0,0,0.75)] overflow-hidden pointer-events-auto">
                            {/* Window chrome */}
                            <div className="w-full h-9 md:h-10 bg-white/95 dark:bg-slate-800/95 border-b border-slate-200/90 dark:border-slate-700 flex items-center px-4 gap-2 shadow-[0_1px_0_rgba(148,163,184,0.35)] dark:shadow-none">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                                <div className="ml-3 h-3 w-20 rounded-full bg-slate-200 dark:bg-slate-700/80" />
                            </div>

                            {/* Image area */}
                            <div className="relative w-full h-[calc(100%-2.5rem)] md:h-[calc(100%-2.75rem)] bg-slate-950/95 dark:bg-slate-950">
                                <Image
                                    src={card.src}
                                    alt={card.label}
                                    fill
                                    sizes="(min-width: 1024px) 580px, 420px"
                                    className={`object-cover object-top opacity-95 ${card.id === "profile" ? "grayscale" : ""}`}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
