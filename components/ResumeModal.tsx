'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink } from 'lucide-react';
import { useResume } from '@/context/ResumeContext';
import Link from 'next/link';

export default function ResumeModal() {
    const { isResumeOpen, closeResume } = useResume();

    return (
        <AnimatePresence>
            {isResumeOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[80]"
                        onClick={closeResume}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[90vh] max-w-6xl bg-card border border-card-border rounded-xl shadow-2xl z-[90] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-card-border bg-background/95 rounded-t-xl">
                            <h2 className="text-xl font-bold">Resume</h2>
                            <div className="flex items-center gap-3">
                                <Link
                                    href="/Resume.pdf"
                                    target="_blank"
                                    download
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors hidden sm:flex items-center gap-2 text-sm font-medium"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download</span>
                                </Link>
                                <Link
                                    href="/Resume.pdf"
                                    target="_blank"
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors text-sm font-medium flex items-center gap-2"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    <span className="hidden sm:inline">Open in New Tab</span>
                                </Link>
                                <button
                                    onClick={closeResume}
                                    className="p-2 hover:bg-red-500/20 hover:text-red-500 rounded-full transition-colors ml-2"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-grow bg-zinc-900 rounded-b-xl overflow-hidden relative">
                            <iframe
                                src="/Resume.pdf"
                                className="w-full h-full border-none"
                                title="Resume PDF"
                            />
                            {/* Fallback/Loading message if needed, though iframe handles PDF natively in most modern browsers */}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
