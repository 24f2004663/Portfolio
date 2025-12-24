'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Mail } from 'lucide-react';

export default function Hero() {
    return (
        <section className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] -z-10" />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
            >
                Hi, I'm <span className="text-accent">Manoj K.</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl md:text-2xl text-secondary mb-8 font-mono"
            >
                Data Science Undergraduate @ IIT Madras
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-xl md:text-2xl text-secondary mb-8 font-mono"
            >
                I build predictive models and scalable analytics applications to solve real-world problems using Python, ML, and modern web tools.
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <Link
                    href="/projects"
                    className="px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all flex items-center gap-2 group"
                >
                    View Projects
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                    href="mailto:contact@example.com"
                    className="px-8 py-3 border border-card-border text-foreground font-medium rounded-full hover:bg-white/5 transition-all flex items-center gap-2"
                >
                    Contact Me
                    <Mail className="w-4 h-4" />
                </Link>
            </motion.div>
        </section>
    );
}
