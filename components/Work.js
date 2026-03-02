"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Terminal, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SYSTEMS = [
    {
        id: "01",
        title: "Custom WordPress Business Platform",
        positioning: "Structured CMS architecture for scalable business operations.",
        overview: "Designed and engineered a custom WordPress solution focused on maintainability, structured theme development, and optimized performance.",
        highlights: [
            "Custom theme engineering (no page builder dependency)",
            "Modular PHP structure",
            "Optimized database queries",
            "SEO and Core Web Vitals optimization",
            "Secure hosting configuration"
        ],
        stack: "WordPress · PHP · MySQL · Nginx/Apache",
        image: "/project1.png",
    },
    {
        id: "02",
        title: "SaaS Admin Dashboard",
        positioning: "Scalable product interface with structured component architecture.",
        overview: "Developed a dynamic admin dashboard with authentication flow, role-based access, and modular UI components.",
        highlights: [
            "Next.js routing architecture",
            "API-driven UI",
            "Reusable component system",
            "State management structure",
            "Secure session handling"
        ],
        stack: "Next.js · React · REST API · Tailwind CSS",
        image: "/project2.png",
    },
    {
        id: "03",
        title: "PHP Backend Application",
        positioning: "Structured backend system with clean logic separation.",
        overview: "Engineered a PHP application with organized controllers, reusable logic layers, and optimized relational database design.",
        highlights: [
            "OOP-based PHP structure",
            "Relational database schema design",
            "Secure form handling",
            "Role-based admin logic",
            "Performance optimization"
        ],
        stack: "Core PHP · MySQL · Server-side Validation",
        image: "/project1.png",
    },
    {
        id: "04",
        title: "E-Commerce Prototype (CCL Internship)",
        positioning: "Frontend-led commerce system with structured UI flow.",
        overview: "Built an online shopping system with product management, cart flow, and responsive layout during enterprise internship exposure.",
        highlights: [
            "Structured product listing logic",
            "Cart interaction system",
            "Responsive layout implementation",
            "Team-led frontend coordination"
        ],
        stack: "HTML · CSS · JavaScript · Bootstrap",
        image: "/project2.png",
    },
    {
        id: "05",
        title: "Razorpay Integrated Website",
        positioning: "Production-ready deployment with payment workflow integration.",
        overview: "Integrated Razorpay payment gateway and structured transaction handling within a deployed website environment.",
        highlights: [
            "Payment gateway API integration",
            "Secure transaction flow",
            "Deployment workflow understanding",
            "Hosting & domain configuration"
        ],
        stack: "JavaScript · Razorpay API · Hosting Deployment",
        image: "/project1.png",
    }
];

export default function Work() {
    return (
        <section id="work" className="relative py-10 lg:py-16 border-t border-slate-200/10 z-10 flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-16 md:gap-[120px]">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full"
                >
                    <div className="flex flex-col items-start text-left">
                        <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                            SELECTED SYSTEMS
                        </span>
                        <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-heading font-bold text-foreground tracking-tight flex flex-wrap gap-3">
                            Engineered
                            <span className="text-slate-400 dark:text-slate-500">Case Studies.</span>
                        </h2>
                    </div>

                    <Link href="/portfolio" className="group flex items-center gap-2 px-6 py-3 md:py-4 rounded-xl border border-slate-200/50 dark:border-white/10 bg-slate-50 hover:bg-white dark:bg-slate-900 dark:hover:bg-slate-800 text-sm md:text-base font-semibold text-foreground transition-all duration-300 shadow-sm hover:shadow-[0_4px_20px_rgba(37,99,235,0.1)]">
                        View All Work
                        <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-brand-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>

                {/* Systems List */}
                <div className="flex flex-col gap-32 md:gap-[160px] w-full">
                    {SYSTEMS.map((system, index) => {
                        const isEven = index % 2 !== 0; // 0 is System 1 (Left Image), 1 is System 2 (Right Image), etc.

                        return (
                            <div
                                key={system.id}
                                className={`flex flex-col lg:items-center ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 w-full`}
                            >
                                {/* Visual Preview Layer */}
                                <motion.div
                                    className="w-full lg:w-1/2 relative aspect-[16/10] md:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/5 bg-slate-100 dark:bg-slate-900/50 group"
                                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none" />

                                    <motion.div
                                        initial={{ scale: 0.98 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                                        className="w-full h-full relative"
                                    >
                                        <Image
                                            src={system.image}
                                            alt={system.title}
                                            fill
                                            className="object-cover object-top opacity-90 grayscale-[20%] group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                            sizes="(min-width: 1024px) 50vw, 100vw"
                                        />
                                    </motion.div>

                                    {/* Tech corner badge */}
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 shadow-sm flex items-center gap-2">
                                        <Terminal className="w-3.5 h-3.5 text-brand-accent" />
                                        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-slate-600 dark:text-slate-400">{system.id}</span>
                                    </div>
                                </motion.div>

                                {/* Structured Documentation Block */}
                                <motion.div
                                    className="w-full lg:w-1/2 flex flex-col items-start"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                                >
                                    <span className="text-brand-accent font-medium text-sm md:text-base tracking-wide mb-3">
                                        {system.positioning}
                                    </span>

                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                                        {system.title}
                                    </h3>

                                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                                        {system.overview}
                                    </p>

                                    {/* Animated left-to-right divider */}
                                    <motion.div
                                        className="w-full h-[1px] bg-slate-200 dark:bg-white/10 mb-8 origin-left"
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    />

                                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        <div className="col-span-1 md:col-span-2 text-sm font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-widest mb-2">
                                            Architecture Highlights
                                        </div>
                                        {system.highlights.map((highlight, hIndex) => (
                                            <div key={hIndex} className="flex gap-3 items-start">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-brand-accent/60 flex-shrink-0" />
                                                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug">{highlight}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Tech Stack Line */}
                                    <div className="w-full bg-slate-50 dark:bg-[#0a0f1a] border border-slate-200/50 dark:border-white/5 rounded-xl p-4 flex flex-col md:flex-row md:items-center gap-4">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 whitespace-nowrap">
                                            Tech Stack
                                        </span>
                                        <div className="w-px h-4 bg-slate-300 dark:bg-white/10 hidden md:block" />
                                        <span className="text-sm font-mono text-brand-accent dark:text-brand-accent/90">
                                            {system.stack}
                                        </span>
                                    </div>

                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
