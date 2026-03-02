"use client";

import { motion } from "framer-motion";
import { Server, Layout, Cpu } from "lucide-react";

const CARDS = [
    {
        id: "01",
        title: "Backend Logic",
        description: "Designing structured PHP systems with clean architecture, database relationships, and API integration layers.",
        icon: Server,
    },
    {
        id: "02",
        title: "Frontend Experience",
        description: "Building responsive, dynamic interfaces using React and Next.js with performance-first principles.",
        icon: Layout,
    },
    {
        id: "03",
        title: "System Thinking",
        description: "Understanding hosting environments, deployment workflows, and lifecycle management beyond just writing code.",
        icon: Cpu,
    },
];

const HIGHLIGHTS = [
    "Architected with clean backend logic.",
    "Structured database design.",
    "Optimized for performance.",
    "Built to scale.",
];

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const textReveal = {
    hidden: { opacity: 0, filter: "blur(8px)", y: 20 },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const statReveal = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

const cardReveal = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    },
};

export default function About() {
    return (
        <section id="about" className="relative min-h-screen py-24 border-t border-slate-200/10 z-10 flex items-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none blueprint-grid opacity-30 dark:opacity-60 z-0" />
            <div className="absolute inset-0 w-full h-[2px] pointer-events-none scan-line z-0" />

            {/* Container - max-w-7xl (1280px) and centered */}
            <div className="max-w-7xl w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">

                {/* Top Text Content */}
                <motion.div
                    className="flex flex-col items-center text-center max-w-4xl mb-16 md:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    <motion.span variants={textReveal} className="text-brand-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-6 block">
                        WHAT I ACTUALLY BUILD
                    </motion.span>

                    <motion.h2 variants={textReveal} className="text-[clamp(40px,5vw,72px)] leading-[1.05] font-heading font-bold text-foreground mb-6 tracking-tight">
                        Engineering Real Systems.<br />
                        <span className="text-slate-400 dark:text-slate-500 opacity-80">Not Just Websites.</span>
                    </motion.h2>

                    <motion.p variants={textReveal} className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-2xl leading-relaxed mb-12">
                        Modern web development isn’t about visuals.<br className="hidden md:block" />
                        It’s about structure, performance, and scalability.
                    </motion.p>

                    {/* Animated Highlight Statements */}
                    <motion.div
                        className="flex flex-col items-center gap-4"
                        variants={staggerContainer}
                    >
                        {HIGHLIGHTS.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={statReveal}
                                className="flex items-center gap-4 text-base md:text-xl font-medium text-slate-800 dark:text-slate-200"
                            >
                                <span className="w-8 h-[2px] bg-brand-accent/40 block" />
                                <span>{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* 3-Column Visual Block */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {CARDS.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={cardReveal}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            className="bg-white/40 dark:bg-slate-900/60 p-8 md:p-10 rounded-[24px] border border-slate-200/60 dark:border-white/5 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] dark:hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] group relative overflow-hidden transition-all duration-300"
                            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
                        >
                            {/* Subtle hover pulse border effect inner */}
                            <div className="absolute inset-0 rounded-[24px] border border-brand-accent/0 group-hover:border-brand-accent/30 transition-colors duration-500 pointer-events-none" />
                            {/* Internal glow top-left */}
                            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-accent/20 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="mb-10 flex items-center justify-between relative z-10">
                                <span className="text-xs font-bold tracking-[0.2em] text-slate-400 group-hover:text-brand-accent transition-colors duration-500">{card.id}</span>
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <card.icon className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover:text-brand-accent transition-colors duration-500" />
                                </motion.div>
                            </div>
                            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-4 relative z-10 group-hover:text-brand-accent transition-colors duration-500">
                                {card.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base relative z-10 font-medium">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
