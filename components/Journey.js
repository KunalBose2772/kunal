"use client";

import { motion } from "framer-motion";

const JOURNEY = [
    {
        id: 1,
        role: "Web Developer",
        company: "Global Webify",
        duration: "Nov 2024 – Present",
        description: "Designing and developing structured WordPress and PHP systems for business clients. Building scalable SaaS interfaces using React and Next.js, while structuring backend architecture and database layers for maintainability and performance.",
        current: true,
    },
    {
        id: 2,
        role: "Website Designing Intern",
        company: "Buck Softech Pvt. Ltd.",
        duration: "Oct 2022 – Mar 2023",
        description: "Built responsive websites, integrated payment systems, and understood deployment workflows in production environments.",
        current: false,
    },
    {
        id: 3,
        role: "Frontend Developer Intern",
        company: "Central Coalfields Limited",
        duration: "Nov 2022 – Dec 2022",
        description: "Developed e-commerce interface systems and gained exposure to enterprise-level IT processes.",
        current: false,
    },
    {
        id: 4,
        role: "Software Developer Intern",
        company: "Zivaan Marketplace Pvt. Ltd.",
        duration: "Nov 2022 – Dec 2022",
        description: "Worked on backend fundamentals and layered application architecture using .NET and SQL Server.",
        current: false,
    }
];

export default function Journey() {
    return (
        <section id="journey" className="relative py-10 lg:py-16 border-t border-slate-200/10 z-10 flex flex-col justify-center overflow-hidden">
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
                        CAREER PROGRESSION
                    </span>
                    <h2 className="text-[clamp(36px,5vw,64px)] leading-[1.05] font-heading font-bold text-foreground tracking-tight">
                        Professional <br className="hidden md:block" />
                        <span className="text-slate-400 dark:text-slate-500">Journey.</span>
                    </h2>
                </motion.div>

                {/* Vertical Stack List */}
                <div className="relative w-full max-w-5xl pl-6 lg:pl-10">
                    {/* Connecting Vertical Line */}
                    <div className="absolute top-4 bottom-4 left-0 w-[2px] bg-slate-200/50 dark:bg-white/5 z-0" />

                    <div className="flex flex-col gap-16 md:gap-20">
                        {JOURNEY.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute top-2 -left-[30px] lg:-left-[46px] w-[14px] h-[14px] rounded-full border-4 border-[var(--background)] ${item.current ? 'bg-brand-accent shadow-[0_0_12px_var(--color-brand-accent)]' : 'bg-slate-300 dark:bg-slate-600 group-hover:bg-brand-accent/60 transition-colors'} z-10`} />

                                {/* Container Card */}
                                <div className={`w-full flex flex-col lg:flex-row gap-4 lg:gap-8 bg-slate-50/50 dark:bg-[#0a0f1a]/80 border ${item.current ? 'border-brand-accent/40 shadow-[0_10px_40px_rgba(37,99,235,0.06)]' : 'border-slate-200/50 dark:border-white/5'} p-6 md:p-8 rounded-2xl relative`}>

                                    {/* Optional Glow for Current Role */}
                                    {item.current && (
                                        <div className="absolute inset-0 rounded-2xl bg-brand-accent/5 blur-xl pointer-events-none" />
                                    )}

                                    {/* Left Info: Meta Data */}
                                    <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-col gap-1 relative z-10">
                                        <h3 className={`text-xl font-bold font-heading ${item.current ? 'text-brand-accent' : 'text-foreground'}`}>
                                            {item.role}
                                        </h3>
                                        <span className="text-slate-800 dark:text-slate-200 font-semibold tracking-wide text-sm md:text-base">
                                            {item.company}
                                        </span>
                                        <span className="text-slate-500 dark:text-slate-400 font-mono text-xs uppercase tracking-widest mt-1 lg:mt-2 block">
                                            {item.duration}
                                        </span>
                                    </div>

                                    {/* Right Info: Description */}
                                    <div className="w-full relative z-10 pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-white/10 lg:pl-8">
                                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-medium">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
