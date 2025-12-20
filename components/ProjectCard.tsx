'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    demoLink?: string;
    codeLink?: string;
    image?: string;
    isLive?: boolean;
}

export default function ProjectCard({ project, index }: { project: ProjectProps, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group rounded-2xl border border-card-border bg-card overflow-hidden hover:border-accent/50 transition-colors"
        >
            <div className="relative h-48 w-full bg-secondary/10 overflow-hidden">
                {/* Placeholder for image if not provided */}
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-secondary">
                        No Image
                    </div>
                )}

                {project.isLive && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded-full border border-green-500/20 backdrop-blur-md flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        LIVE
                    </div>
                )}
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                </h3>
                <p className="text-secondary mb-4 line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-white/5">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    {project.demoLink && (
                        <Link
                            href={project.demoLink}
                            target="_blank"
                            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                        </Link>
                    )}
                    {project.codeLink && (
                        <Link
                            href={project.codeLink}
                            target="_blank"
                            className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            View Code
                        </Link>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
