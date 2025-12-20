'use client';

import { motion } from 'framer-motion';

const techs = [
    "Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn",
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Docker", "Linux", "Git", "SQL", "MongoDB"
];

export default function TechStack() {
    return (
        <div className="w-full overflow-hidden py-10 relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex w-max">
                <motion.div
                    className="flex gap-8 whitespace-nowrap px-4"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...techs, ...techs, ...techs].map((tech, index) => (
                        <div
                            key={index}
                            className="px-6 py-3 rounded-xl bg-secondary/5 border border-white/5 text-secondary font-mono text-lg hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                        >
                            {tech}
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
