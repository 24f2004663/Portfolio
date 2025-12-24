'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import githubLogo from './github-mark-white.png';
import kaggleLogo from './Kaggle_logo.png';
import leetcodeLogo from './leetcode.png';

const stats = [
    {
        label: "LeetCode Solved",
        value: "350+",
        image: leetcodeLogo,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20",
        link: "https://leetcode.com/u/GAz2hqGXye/"
    },
    {
        label: "GitHub Commits",
        value: "1,200+",
        image: githubLogo,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        link: "https://github.com/24f2004663"
    },
    {
        label: "Kaggle Tier",
        value: "Expert",
        image: kaggleLogo,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        link: "https://www.kaggle.com/zesalamander/"
    }
];

export default function StatsGrid() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Link
                            href={stat.link}
                            target="_blank"
                            className={`p-6 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm flex items-center gap-6 hover:scale-105 transition-transform block`}
                        >
                            <div className={`p-4 rounded-xl bg-background/50 ${stat.color} shrink-0`}>
                                <Image src={stat.image} alt={stat.label} width={100} height={100} className="w-[100px] h-[100px] object-contain" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <div className="text-sm text-secondary">{stat.label}</div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
