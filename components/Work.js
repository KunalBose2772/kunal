"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        id: 1,
        title: "Feature-Rich Web Application",
        description: "A highly interactive web platform built with Next.js and TailwindCSS, featuring real-time data synchronization and complex state management.",
        image: "/project1.png",
        tags: ["React", "Next.js", "TailwindCSS"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "SaaS Platform Interface",
        description: "Enterprise-grade dashboard architecture prioritizing data visualization, performance metrics, and seamless user experience.",
        image: "/project2.png",
        tags: ["TypeScript", "Node.js", "PostgreSQL"],
        link: "#",
        github: "#"
    }
];

export default function Work() {
    return (
        <section id="work" className="relative min-h-screen py-24 border-t border-slate-200/10 z-10">
            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                        01. Selected Works
                    </span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
                        Featured Projects
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 gap-16 md:gap-24">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center group`}
                        >
                            {/* Project Image */}
                            <div className="w-full lg:w-3/5">
                                <Link href={project.link} className="block w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/10 relative aspect-[16/10] group-hover:border-brand-accent/50 transition-colors duration-500">
                                    <div className="absolute inset-0 z-10 bg-brand-accent/0 group-hover:bg-brand-accent/10 transition-colors duration-500" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    />
                                </Link>
                            </div>

                            {/* Project Info */}
                            <div className="w-full lg:w-2/5 flex flex-col items-start text-left">
                                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground group-hover:text-brand-accent transition-colors">
                                    {project.title}
                                </h3>
                                <div className="bg-slate-50 dark:bg-slate-800/80 p-6 rounded-xl border border-slate-200 dark:border-white/5 mb-6 shadow-sm">
                                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                                <ul className="flex flex-wrap gap-3 mb-8">
                                    {project.tags.map((tag) => (
                                        <li key={tag} className="text-sm font-medium px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-brand-accent rounded-full border border-slate-200 dark:border-brand-accent/20">
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex items-center gap-6">
                                    <Link href={project.link} className="flex items-center gap-2 font-semibold text-brand-accent hover:text-brand-hover transition-colors">
                                        View Live <ExternalLink className="w-4 h-4" />
                                    </Link>
                                    <Link href={project.github} className="flex items-center gap-2 font-medium text-slate-600 dark:text-slate-400 hover:text-foreground transition-colors">
                                        <Github className="w-5 h-5" /> Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
