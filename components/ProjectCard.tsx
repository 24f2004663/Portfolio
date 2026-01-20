'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

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
    const [isExpanded, setIsExpanded] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isExpanded]);

    const handleCardClick = (e: React.MouseEvent) => {
        // Prevent expansion if clicking on links
        if ((e.target as HTMLElement).closest('a')) return;
        setIsExpanded(true);
    };

    const expandedContent = (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsExpanded(false)}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl h-[85vh] bg-card rounded-2xl border border-card-border overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
                <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                {/* Left side - Image */}
                <div className="w-full md:w-1/2 h-64 md:h-full relative bg-secondary/10">
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-contain p-4"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-secondary">
                            No Image
                        </div>
                    )}
                </div>

                {/* Right side - Content */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="text-3xl font-bold text-white">{project.title}</h2>
                        {project.isLive && (
                            <span className="px-3 py-1 bg-green-500/20 text-green-500 text-xs font-bold rounded-full border border-green-500/20 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                LIVE
                            </span>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag} className="px-3 py-1 text-sm rounded-full bg-secondary/10 text-secondary border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="prose prose-invert max-w-none mb-8">
                        <p className="text-lg text-secondary leading-relaxed whitespace-pre-wrap">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex gap-4 mt-auto">
                        {project.demoLink && (
                            <Link
                                href={project.demoLink}
                                target="_blank"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-xl transition-all font-medium"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Live Demo
                            </Link>
                        )}
                        {project.codeLink && (
                            <Link
                                href={project.codeLink}
                                target="_blank"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-secondary/10 hover:bg-secondary/20 text-white rounded-xl transition-all font-medium border border-white/10"
                            >
                                <Github className="w-5 h-5" />
                                View Code
                            </Link>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={handleCardClick}
                className="group rounded-2xl border border-card-border bg-card overflow-hidden hover:border-accent/50 transition-colors cursor-pointer flex flex-col h-full"
            >
                <div className="relative h-48 w-full bg-secondary/10 overflow-hidden shrink-0">
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

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-secondary mb-4 line-clamp-2 flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-white/5">
                                {tag}
                            </span>
                        ))}
                        {project.tags.length > 3 && (
                            <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-white/5">
                                +{project.tags.length - 3}
                            </span>
                        )}
                    </div>

                    <div className="flex gap-4 mt-auto">
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

            {mounted && isExpanded && createPortal(expandedContent, document.body)}
        </>
    );
}
