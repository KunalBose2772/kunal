"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
