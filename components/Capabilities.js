"use client";

import { motion } from "framer-motion";
import { Server, LayoutTemplate, Database, Blocks } from "lucide-react";

const CAPABILITIES = [
    {
        id: "backend",
        title: "Backend Systems",
        icon: Server,
        skills: [
            "Core PHP (OOP)",
            "Database Design (MySQL / PostgreSQL)",
            "REST APIs & Webhooks",
            "Query Optimization",
            "Secure Server-Side Validation"
        ]
    },
    {
        id: "frontend",
        title: "Frontend Engineering",
        icon: LayoutTemplate,
        skills: [
            "React JS",
            "Next.js (App Router)",
            "JavaScript ES6+",
            "Component Architecture",
            "Performance Optimization"
        ]
    },
    {
        id: "wordpress",
        title: "WordPress Architecture",
        icon: Database,
        skills: [
            "Custom Theme Engineering",
            "Plugin Development",
            "WooCommerce Systems",
            "Headless WordPress",
            "CMS Structuring"
        ]
    },
    {
        id: "saas",
        title: "SaaS & Application Systems",
        icon: Blocks,
        skills: [
            "Admin Panels",
            "CRM & Lead Systems",
            "Authentication Flows",
            "Role-Based Access",
            "Payment Integration"
        ]
    }
];

export default function Capabilities() {
    return (
        <section id="capabilities" className="relative py-14 lg:py-24 border-t border-slate-200/10 z-10 flex flex-col justify-center overflow-hidden perspective-[1000px]">
            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col gap-12 lg:gap-16">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-start text-left max-w-2xl"
                >
                    <span className="text-brand-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                        TECHNICAL CAPABILITIES
                    </span>
                    <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-heading font-bold text-foreground tracking-tight mb-6">
                        System <br className="hidden md:block" />
                        <span className="text-slate-400 dark:text-slate-500">Inventory.</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
                        Structured systems across backend, frontend, and scalable application development.
                    </p>
                </motion.div>

                {/* 2x2 Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
                    {CAPABILITIES.map((cluster, index) => {
                        const Icon = cluster.icon;

                        return (
                            <motion.div
                                key={cluster.id}
                                initial={{ opacity: 0, y: 40, translateZ: -20 }}
                                whileInView={{ opacity: 1, y: 0, translateZ: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                style={{ transformStyle: 'preserve-3d' }}
                                className="group relative w-full rounded-3xl bg-slate-50/50 dark:bg-[#0a0f1a]/50 border border-slate-200/50 dark:border-white/5 p-8 md:p-10 transition-all duration-500 hover:border-brand-accent/30 hover:shadow-[0_20px_60px_rgba(37,99,235,0.05)] overflow-hidden"
                            >
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-brand-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10 flex flex-col gap-8 h-full">
                                    {/* Card Header */}
                                    <div className="flex items-center gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-brand-accent/50 transition-colors duration-500 shadow-sm">
                                            <Icon className="w-5 h-5 text-slate-600 dark:text-slate-400 group-hover:text-brand-accent transition-colors duration-500" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold font-heading text-foreground tracking-tight">
                                            {cluster.title}
                                        </h3>
                                    </div>

                                    {/* Horizontal Divider */}
                                    <div className="w-full h-px bg-slate-200 dark:bg-white/10" />

                                    {/* Bullets */}
                                    <ul className="flex flex-col gap-4 mt-auto">
                                        {cluster.skills.map((skill, sIndex) => (
                                            <li key={sIndex} className="flex items-start gap-3">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-sm bg-brand-accent/60 flex-shrink-0" />
                                                <span className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-300 leading-snug">
                                                    {skill}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
