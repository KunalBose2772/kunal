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
    hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
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

// Custom Highlight Animation
const HighlightItem = ({ text }) => {
    return (
        <motion.div
            className="flex items-center gap-4 text-base md:text-[18px] font-medium text-slate-700 dark:text-slate-300"
        >
            <motion.span
                variants={{
                    hidden: { scaleX: 0, opacity: 0 },
                    visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
                className="w-6 h-[2px] bg-brand-accent block origin-left flex-shrink-0"
            />
            <motion.span
                variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
            >
                {text}
            </motion.span>
        </motion.div>
    );
};

export default function About() {
    return (
        <section id="about" className="relative min-h-screen py-24 lg:py-32 border-t border-slate-200/10 z-10 flex items-center overflow-hidden">
            {/* Background glow global */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />

            {/* Container - max-w-7xl (1280px) */}
            <div className="max-w-[1280px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-20 lg:gap-32">

                {/* Asymmetric Top Block */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Side (60%) */}
                    <motion.div
                        className="lg:col-span-7 flex flex-col items-start text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span variants={textReveal} className="text-brand-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                            WHAT I ACTUALLY BUILD
                        </motion.span>

                        <motion.h2 variants={textReveal} className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-heading font-bold text-foreground mb-6 tracking-tight">
                            Engineering Real Systems.<br />
                            <span className="text-slate-400 dark:text-slate-500 opacity-80">Not Just Websites.</span>
                        </motion.h2>

                        <motion.p variants={textReveal} className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-medium max-w-xl leading-relaxed mb-10">
                            Modern web development isn’t about visuals.<br className="hidden md:block" />
                            It’s about structure, performance, and scalability.
                        </motion.p>

                        {/* Animated Highlight Statements */}
                        <motion.div
                            className="flex flex-col items-start gap-4"
                            variants={staggerContainer}
                        >
                            {HIGHLIGHTS.map((item, index) => (
                                <HighlightItem key={index} text={item} />
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Side (40%) - Subtley Parallax System Vis */}
                    <motion.div
                        className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center pointer-events-none"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        style={{ perspective: 1000 }}
                    >
                        {/* Visual Container */}
                        <div className="absolute inset-0 rounded-3xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 backdrop-blur-sm overflow-hidden flex items-center justify-center">

                            {/* Internal Grids and Scanline local to the viz */}
                            <div className="absolute inset-0 blueprint-grid opacity-30 dark:opacity-60" />
                            <div className="absolute inset-0 w-[200%] h-[2px] scan-line" />

                            {/* Floating Parallax Geometry */}
                            <motion.div
                                animate={{
                                    y: [-15, 15, -15],
                                    rotateX: [3, -3, 3],
                                    rotateY: [-3, 3, -3]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="relative z-10 w-48 h-48 md:w-56 md:h-56 rounded-full border border-brand-accent/20 bg-brand-accent/5 backdrop-blur-xl shadow-[0_0_50px_rgba(37,99,235,0.1)] flex items-center justify-center"
                            >
                                {/* Inner rotating dashed rings */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-4 rounded-full border-[1.5px] border-brand-accent/30 border-dashed"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-8 rounded-full border border-slate-300 dark:border-white/10 opacity-50"
                                />

                                {/* Core core pulse */}
                                <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-tr from-brand-accent/40 to-transparent rounded-full flex items-center justify-center">
                                    <div className="absolute w-full h-full bg-brand-accent/20 blur-xl rounded-full" />
                                    <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_rgba(37,99,235,1)]" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>

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
                            className="bg-white/40 dark:bg-slate-900/60 p-8 md:p-10 rounded-[28px] border border-slate-200/60 dark:border-white/5 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] dark:hover:shadow-[0_20px_40px_rgba(37,99,235,0.15)] group relative overflow-hidden transition-all duration-300"
                            style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
                        >
                            {/* Subtle hover pulse border effect inner */}
                            <div className="absolute inset-0 rounded-[28px] border border-brand-accent/0 group-hover:border-brand-accent/30 transition-colors duration-500 pointer-events-none" />
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
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base relative z-10 font-medium tracking-wide">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
