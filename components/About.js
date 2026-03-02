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

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
    return (
        <section id="about" className="relative min-h-screen py-24 border-t border-slate-200/10 z-10 flex items-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none radial-glow opacity-20 dark:opacity-40" />
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">

                {/* Top Text Content */}
                <div className="max-w-[860px] mb-20 md:mb-28">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span variants={fadeUp} className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                            What I Actually Build
                        </motion.span>

                        <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-heading font-bold text-foreground mb-10 tracking-tight">
                            Engineering Real Systems — <br className="hidden md:block" />
                            <span className="text-slate-400 dark:text-slate-500">Not Just Websites.</span>
                        </motion.h2>

                        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                            <div className="space-y-6 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                                <p>
                                    Modern web development is not just about visuals. It’s about structure, performance, and long-term scalability.
                                </p>
                                <p>
                                    Whether it’s a custom WordPress architecture, a structured PHP application, or a SaaS dashboard built with React and Next.js — my focus remains the same:
                                </p>
                                <div className="pt-4">
                                    <p className="text-xl md:text-2xl font-heading font-bold text-foreground flex flex-col gap-2">
                                        <span className="flex items-center gap-3"><span className="w-8 h-[1px] bg-brand-accent"></span>Build it right.</span>
                                        <span className="flex items-center gap-3"><span className="w-12 h-[1px] bg-brand-accent"></span>Build it structured.</span>
                                        <span className="flex items-center gap-3"><span className="w-16 h-[1px] bg-brand-accent"></span>Build it to last.</span>
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="text-foreground font-semibold text-lg">I design and build systems that are:</p>
                                <ul className="space-y-4">
                                    {[
                                        "Architected with clean backend logic",
                                        "Structured with maintainable database design",
                                        "Optimized for performance and environments",
                                        "Built to scale as business requirements evolve"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 text-slate-600 dark:text-slate-400">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent/80 mt-2.5 flex-shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.5)]" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 3-Column Visual Block */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                >
                    {CARDS.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={fadeUp}
                            className="bg-white/40 dark:bg-slate-900/40 p-8 md:p-10 rounded-[28px] border border-slate-200/60 dark:border-white/5 backdrop-blur-md shadow-xl shadow-slate-200/20 dark:shadow-none hover:bg-white/70 dark:hover:bg-slate-800/60 transition-all duration-500 group relative overflow-hidden"
                        >
                            {/* Subtle hover gradient inside card */}
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/0 to-brand-accent/0 group-hover:from-brand-accent/5 transition-all duration-500 pointer-events-none" />

                            <div className="mb-8 flex items-center justify-between relative z-10">
                                <span className="text-sm font-bold tracking-widest text-brand-accent">{card.id}</span>
                                <card.icon className="w-6 h-6 text-slate-400 dark:text-slate-500 group-hover:text-brand-accent transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-foreground mb-4 relative z-10 group-hover:text-brand-accent transition-colors duration-500">
                                {card.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base relative z-10">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
