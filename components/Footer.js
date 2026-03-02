"use client";

import Link from "next/link";
import { MoveUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full relative py-8 px-6 md:px-12 border-t border-slate-200/10 z-10 bg-[var(--background)]">
            <div className="max-w-[1480px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative">

                {/* Copyright / Identity */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
                    <span className="text-foreground tracking-wide font-heading font-medium text-sm md:text-base">
                        © {new Date().getFullYear()} Kunal Bose.
                    </span>
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                    <span className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-medium">
                        Engineered for Performance.
                    </span>
                </div>

                {/* Return to Top */}
                <button
                    onClick={scrollToTop}
                    className="group flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400 group-hover:text-foreground transition-colors">Return Top</span>
                    <MoveUp className="w-3.5 h-3.5 text-slate-400 group-hover:-translate-y-1 group-hover:text-brand-accent transition-all duration-300" />
                </button>

            </div>
        </footer>
    );
}
