"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="relative min-h-[80vh] py-24 border-t border-slate-200/10 z-10 flex flex-col justify-center">
            <div className="absolute inset-0 pointer-events-none radial-glow opacity-30 dark:opacity-50" />
            <div className="max-w-[1480px] w-full mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col justify-center"
                    >
                        <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                            02. Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                            Let's build something <br className="hidden md:block" />
                            <span className="text-brand-accent">amazing together.</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[500px] mb-12">
                            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex flex-col gap-6 mb-12">
                            <a href="mailto:hello@kunalbose.com" className="group flex items-center gap-4 text-foreground w-fit">
                                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 group-hover:border-brand-accent group-hover:bg-brand-accent/5 transition-all">
                                    <Mail className="w-5 h-5 text-slate-600 dark:text-brand-accent" />
                                </div>
                                <span className="text-lg font-medium group-hover:text-brand-accent transition-colors">hello@kunalbose.com</span>
                            </a>
                            <div className="flex items-center gap-4 text-foreground w-fit">
                                <div className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900">
                                    <MapPin className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                                </div>
                                <span className="text-lg font-medium text-slate-600 dark:text-slate-300">Available Nationwide</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link href="#" className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 hover:border-brand-accent hover:text-brand-accent transition-all">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 hover:border-brand-accent hover:text-brand-accent transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center bg-white dark:bg-slate-900 hover:border-brand-accent hover:text-brand-accent transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white dark:bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none"
                    >
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-slate-400"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-slate-400"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-white/10 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-all placeholder:text-slate-400 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="group w-full mt-2 overflow-hidden relative bg-brand-accent hover:bg-brand-hover text-white text-lg font-[600] tracking-[0.3px] px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_14px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.3)]"
                            >
                                Send Message
                                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
