"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook, ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-[90vh] py-24 flex flex-col justify-center items-center text-center overflow-hidden border-t border-slate-200/10 z-10">
            {/* Cinematic Background Glow */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-[#5B5FFF] to-[#00E0FF] blur-[120px] pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.08, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            />

            <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">

                {/* Headline */}
                <motion.h2
                    className="text-[clamp(40px,6vw,80px)] leading-[1.05] font-heading font-bold text-foreground tracking-tight mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    Let's Build Something <br className="hidden md:block" />
                    Structured.
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium max-w-2xl mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    If you're looking for someone who thinks beyond interfaces and builds systems with clarity, performance, and long-term scalability — let's connect.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center gap-6 mb-24"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Primary Button */}
                    <Link
                        href="#resume"
                        className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 shadow-[0_4px_20px_rgba(91,95,255,0.25)] hover:shadow-[0_8px_30px_rgba(0,224,255,0.4)] w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#5B5FFF] to-[#00E0FF] transition-transform duration-500 group-hover:scale-105" />
                        <span className="relative z-10">View Resume</span>
                        <Download className="w-5 h-5 relative z-10 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>

                    {/* Secondary Button */}
                    <a
                        href="mailto:kunalbose.2525@gmail.com"
                        className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-200/50 dark:border-white/10 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 backdrop-blur-md transition-all duration-300 font-semibold text-foreground shadow-sm w-full sm:w-auto"
                    >
                        Start a Conversation
                        <ArrowRight className="w-5 h-5 text-brand-accent group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Direct Contact & Socials Block */}
                <motion.div
                    className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 p-8 md:p-12 rounded-3xl bg-slate-50/50 dark:bg-[#0a0f1a]/50 border border-slate-200/50 dark:border-white/5 text-left backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Identity */}
                    <div className="flex flex-col gap-1.5 justify-center">
                        <span className="text-xl font-bold font-heading text-foreground">Kunal Bose</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B5FFF] to-[#00E0FF] font-semibold text-sm">Web Systems Developer</span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono text-xs uppercase tracking-widest mt-1">Ranchi, India</span>
                    </div>

                    {/* Contact Channels */}
                    <div className="flex flex-col gap-3 justify-center md:items-center">
                        <a href="mailto:kunalbose.2525@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-[#5B5FFF] transition-colors font-medium text-sm md:text-base">
                            kunalbose.2525@gmail.com
                        </a>
                        <a href="tel:7667341075" className="text-slate-600 dark:text-slate-300 hover:text-[#5B5FFF] transition-colors font-medium text-sm md:text-base">
                            +91 76673 41075
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-wrap items-center md:justify-end gap-3">
                        <Link href="https://github.com/KunalBose2772" target="_blank" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:border-[#5B5FFF] hover:text-[#5B5FFF] transition-all">
                            <Github className="w-4 h-4" />
                        </Link>
                        <Link href="https://linkedin.com/in/kunal-bose-a45926269" target="_blank" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:border-[#5B5FFF] hover:text-[#5B5FFF] transition-all">
                            <Linkedin className="w-4 h-4" />
                        </Link>
                        <Link href="https://x.com/KunalBose2772" target="_blank" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:border-[#5B5FFF] hover:text-[#5B5FFF] transition-all">
                            <Twitter className="w-4 h-4" />
                        </Link>
                        <Link href="https://facebook.com/people/Kunal-Bose" target="_blank" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:border-[#5B5FFF] hover:text-[#5B5FFF] transition-all">
                            <Facebook className="w-4 h-4" />
                        </Link>
                        <Link href="https://instagram.com/kunalbose2772" target="_blank" className="w-10 h-10 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 hover:border-[#5B5FFF] hover:text-[#5B5FFF] transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
