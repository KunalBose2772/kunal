"use client";

import { motion } from "framer-motion";
import Mockups from "./Mockups";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroParticles from "./HeroParticles";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

export default function Hero() {
    return (
        <section className="relative min-h-screen pt-[120px] overflow-hidden flex items-center justify-center">
            {/* Background Layer: Grid */}
            <div className="absolute inset-0 pointer-events-none hero-grid z-0" />

            {/* Background Layer: Premium blue radial glow (light + dark) */}
            <div className="absolute inset-0 z-0 pointer-events-none hero-vignette" />

            {/* Background Layer: Subtle drifting particles */}
            <HeroParticles />

            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center relative">

                {/* Left Side (Text & CTA) -> 55% equivalent (roughly 7 columns) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="lg:col-span-7 flex flex-col items-start text-left z-10"
                >
                    {/* Main Headline */}
                    <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-8 md:mb-10">
                        <h1 className="text-foreground font-heading font-bold text-[clamp(44px,6vw,68px)] leading-[1.05] tracking-[-0.02em] uppercase">
                            I DESIGN & BUILD <br className="hidden md:block" />
                            <span className="text-brand-accent">DIGITAL PRODUCTS</span> <br className="hidden md:block" />
                            THAT SCALE.
                        </h1>
                    </motion.div>

                    <motion.div variants={fadeUp} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="mb-10 md:mb-12">
                        <p className="text-neutral-950 dark:text-slate-100 font-medium text-[18px] leading-relaxed max-w-[500px]">
                            Full-Stack Developer building performance-driven web platforms, SaaS products, and scalable architectures.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeUp}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-start gap-4 pt-2 w-full sm:w-auto"
                    >
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
                            <Link
                                href="#contact"
                                className="group w-full sm:w-auto overflow-hidden relative bg-brand-accent hover:bg-brand-hover text-white text-base font-[600] tracking-[0.3px] px-8 py-3.5 rounded-[10px] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)]"
                            >
                                Start a Conversation
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="#work"
                                className="group w-full sm:w-auto px-8 py-3.5 rounded-[10px] border border-brand-accent text-brand-accent hover:bg-brand-accent/5 dark:hover:bg-brand-accent/10 font-[600] tracking-[0.3px] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                View Work
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side Visual -> 45% equivalent (roughly 5 columns) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                    className="lg:col-span-5 flex justify-center lg:justify-end mt-16 lg:mt-0"
                >
                    <Mockups />
                </motion.div>
            </div>
        </section>
    );
}
