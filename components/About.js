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
                            <span className="text-brand-accent opacity-90">Not Just Websites.</span>
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

                    {/* Right Side (40%) - Stunning System Visualization */}
                    <motion.div
                        className="lg:col-span-5 relative w-full aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center pointer-events-none mt-16 lg:mt-0"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    >
                        {/* Ambient Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-accent/20 dark:bg-brand-accent/15 blur-[80px] rounded-full" />

                        {/* Widget 1: Server Stats (Back left) */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-[5%] md:top-[10%] left-[0%] md:-left-4 w-[75%] sm:w-[60%] rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-4 sm:p-5 flex flex-col gap-3 z-10"
                        >
                            <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <Server className="w-4 h-4 text-brand-accent" />
                                    <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Node.Server_01</span>
                                </div>
                                <div className="flex gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                                    <div className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_var(--color-brand-accent)] animate-pulse" />
                                </div>
                            </div>

                            <div className="flex items-end gap-1.5 h-12 w-full mt-2">
                                {[40, 70, 45, 90, 65, 85, 40, 60, 50, 80].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: "20%" }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 2 + (i * 0.2), repeat: Infinity, repeatType: "mirror" }}
                                        className={`w-full rounded-t-[2px] ${i === 8 || i === 3 ? 'bg-brand-accent' : 'bg-slate-200 dark:bg-slate-700'}`}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Widget 2: Database Query (Front right) */}
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute bottom-[10%] right-[0%] md:-right-4 w-[85%] sm:w-[70%] rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-5 flex flex-col z-30"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center border border-brand-accent/20">
                                    <Cpu className="w-5 h-5 text-brand-accent" />
                                </div>
                                <div>
                                    <div className="text-[13px] font-bold text-slate-800 dark:text-slate-200 leading-none mb-1.5">Database Query</div>
                                    <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400">14ms response time</div>
                                </div>
                            </div>
                            <div className="w-full rounded-lg bg-slate-50 dark:bg-[#0a0f1a] p-3.5 font-mono text-[11px] leading-relaxed text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-white/5">
                                <span className="text-brand-accent font-semibold">SELECT</span> * <span className="text-brand-accent font-semibold">FROM</span> architecture <br />
                                <span className="text-brand-accent font-semibold">WHERE</span> system = <span className="text-emerald-500 dark:text-emerald-400">'optimized'</span>;
                            </div>
                        </motion.div>

                        {/* Center Floating Orbit Core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-[220px] sm:h-[220px] z-20 pointer-events-none flex items-center justify-center">
                            {/* Outer rotating dashed ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full border border-dashed border-brand-accent/30 dark:border-white/20"
                            />

                            {/* Middle Glass Plate */}
                            <div className="absolute w-[65%] h-[65%] rounded-full border border-slate-200/50 dark:border-white/10 bg-white/20 dark:bg-slate-900/30 backdrop-blur-xl flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.15)] relative">
                                {/* Rotating orbital node */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0"
                                >
                                    <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_12px_var(--color-brand-accent)]" />
                                </motion.div>

                                {/* Central Crystal Diamond */}
                                <motion.div
                                    animate={{ rotate: [45, 45, 225, 225], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-accent to-blue-400 dark:from-brand-accent dark:to-blue-500 shadow-[0_0_30px_var(--color-brand-accent)] rotate-45 flex items-center justify-center border border-white/20"
                                >
                                    <div className="w-5 h-5 rounded-[4px] bg-white/30 dark:bg-white/20 border border-white/50 backdrop-blur-sm" />
                                </motion.div>
                            </div>
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
