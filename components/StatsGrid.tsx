'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import githubLogo from './github-mark-white.png';
import kaggleLogo from './Kaggle_logo.png';
import leetcodeLogo from './leetcode.png';
import devpostLogo from './devpost.png';

const stats = [
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
        label: "Devpost Hackathons",
        value: "25+",
        image: devpostLogo,
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        border: "border-teal-500/20",
        link: "https://devpost.com/24f2004663?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
    }
];

export default function StatsGrid() {
    return (
        <section className="py-12 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                            className={`p-4 rounded-2xl border ${stat.border} ${stat.bg} backdrop-blur-sm flex items-center gap-4 hover:scale-105 transition-transform block h-full`}
                        >
                            <div className={`p-2 rounded-xl bg-background/50 ${stat.color} shrink-0`}>
                                <Image src={stat.image} alt={stat.label} width={80} height={80} className="w-20 h-20 object-contain rounded-lg" />
                            </div>
                            <div>
                                <div className="text-3xl font-bold">{stat.value}</div>
                                <div className="text-sm text-secondary font-medium whitespace-nowrap">{stat.label}</div>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
