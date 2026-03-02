"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-[24px] left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-48px)] max-w-[1480px] rounded-[20px] px-7 py-3.5 nav-glass ${scrolled
                ? "border border-slate-200/70 shadow-[0_10px_40px_rgba(15,23,42,0.16)] dark:border-white/18 dark:shadow-[0_10px_40px_rgba(15,23,42,0.7)]"
                : "border border-slate-200/40 shadow-[0_22px_60px_rgba(15,23,42,0.18)] dark:border-white/14 dark:shadow-[0_22px_60px_rgba(15,23,42,0.76)]"
                }`}
        >
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="nav-logo relative w-32 h-10 md:w-40 md:h-12 overflow-visible">
                        <Image
                            src="/builtbykunal.png"
                            alt="Built by Kunal"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <div className="hidden md:flex items-center gap-6 text-foreground/80">
                        <Link href="#about" className="hover:text-brand-accent transition-colors">
                            About
                        </Link>
                        <Link href="#work" className="hover:text-brand-accent transition-colors">
                            Work
                        </Link>
                        <Link href="#contact" className="hover:text-brand-accent transition-colors">
                            Contact
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 border-l border-gray-200 dark:border-gray-800 pl-4">
                        <div className="hidden lg:flex items-center gap-3 pr-2 border-r border-gray-200 dark:border-gray-800">
                            <a href="https://github.com/KunalBose2772" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Github className="w-4 h-4" />
                            </a>
                            <a href="https://linkedin.com/in/kunal-bose-a45926269" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a href="https://x.com/KunalBose2772" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="https://facebook.com/people/Kunal-Bose" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="https://instagram.com/kunalbose2772" target="_blank" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>

                        <Link
                            href="#resume"
                            className="hidden sm:flex px-4 py-2 rounded-[10px] border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white transition-all duration-300 ease-out font-[600] tracking-[0.3px]"
                        >
                            Resume
                        </Link>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
