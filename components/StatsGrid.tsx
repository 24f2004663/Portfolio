'use client';

import { motion } from 'framer-motion';
import { Code2, GitCommit, Database } from 'lucide-react';

const stats = [
    {
        label: "LeetCode Solved",
        value: "350+",
        icon: Code2,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/20"
    },
    {
        label: "GitHub Commits",
        value: "1,200+",
        icon: GitCommit,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20"
    },
    {
        label: "Kaggle Tier",
        value: "Expert",
        icon: Database,
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
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
                        className={`p-6 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm flex items-center gap-4 hover:scale-105 transition-transform cursor-default`}
                    >
                        <div className={`p-3 rounded-xl bg-background/50 ${stat.color}`}>
                            <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-3xl font-bold">{stat.value}</div>
                            <div className="text-sm text-secondary">{stat.label}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
