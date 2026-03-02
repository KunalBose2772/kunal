"use client";

import { motion } from "framer-motion";

const STEPS = [
    {
        id: "01",
        title: "Architecture Planning",
        description: "Define database schema, logic separation, and API structure before development begins."
    },
    {
        id: "02",
        title: "Structured Implementation",
        description: "Modular backend and reusable frontend components."
    },
    {
        id: "03",
        title: "Optimization & Security",
        description: "Query optimization, validation layers, environment configuration."
    },
    {
        id: "04",
        title: "Scalability Consideration",
        description: "Ensure systems can evolve without structural rewrites."
    }
];

export default function Approach() {
    return (
        <section id="approach" className="relative py-10 lg:py-16 border-t border-slate-200/10 z-10 flex flex-col justify-center overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.02] dark:bg-bottom pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent, black)' }} />

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                    {/* Left Column: Context & Overview */}
                    <motion.div
                        className="lg:col-span-5 flex flex-col items-start text-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                            ENGINEERING APPROACH
                        </span>
                        <h2 className="text-[clamp(36px,4vw,56px)] leading-[1.05] font-heading font-bold text-foreground mb-8 tracking-tight">
                            How I Approach <br className="hidden md:block" />
                            <span className="text-slate-400 dark:text-slate-500">System Architecture.</span>
                        </h2>

                        <div className="flex flex-col gap-5 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                            <p>Every system I build follows a structured lifecycle.</p>
                            <p>I begin with architecture planning — defining database relationships, backend logic separation, and integration points before writing interface code.</p>
                            <p>From there, I focus on clean modular implementation, ensuring components remain reusable, maintainable, and scalable.</p>
                            <p>Performance optimization, hosting environment considerations, and long-term maintainability are built into the process — not added later.</p>

                            <div className="mt-4 pt-6 border-t border-slate-200 dark:border-white/10">
                                <p className="text-foreground font-semibold">The goal is not just deployment.</p>
                                <p className="text-brand-accent font-semibold">The goal is structured longevity.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: 4 Vertical Stages */}
                    <div className="lg:col-span-7 relative">
                        {/* Vertical connecting line */}
                        <div className="absolute top-2 bottom-6 left-[23px] md:left-[27px] w-px bg-slate-200 dark:bg-white/10 z-0" />

                        <div className="flex flex-col gap-12 relative z-10">
                            {STEPS.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    className="flex gap-8 md:gap-10 group"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px", amount: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0 },
                                        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
                                    }}
                                >
                                    {/* Left Side: Step Indicator */}
                                    <motion.div
                                        className="relative flex-shrink-0 flex flex-col items-center"
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                        }}
                                    >
                                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center relative z-10 transition-colors duration-500 group-hover:border-brand-accent/50 group-hover:bg-brand-accent/5 shadow-sm">
                                            {/* Glow on active/hover */}
                                            <div className="absolute inset-0 rounded-2xl bg-brand-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <span className="text-sm md:text-base font-mono font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-accent transition-colors duration-500 relative z-10">
                                                {step.id}
                                            </span>
                                        </div>
                                    </motion.div>

                                    {/* Right Side: Content */}
                                    <div className="flex flex-col pt-1.5 md:pt-3">
                                        <motion.h3
                                            className="text-xl md:text-2xl font-bold font-heading text-foreground mb-3 group-hover:text-brand-accent transition-colors duration-500"
                                            variants={{
                                                hidden: { opacity: 0, x: -10 },
                                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                                            }}
                                        >
                                            {step.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-lg"
                                            variants={{
                                                hidden: { opacity: 0, y: 10 },
                                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                                            }}
                                        >
                                            {step.description}
                                        </motion.p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
