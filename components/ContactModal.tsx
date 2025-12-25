'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';
import { useContact } from '@/context/ContactContext';
import Link from 'next/link';

const contactOptions = [
    {
        label: "Email",
        value: "manojk01072006@gmail.com",
        icon: Mail,
        color: "text-red-500",
        bg: "bg-red-500/10",
        border: "border-red-500/20",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=manojk01072006@gmail.com"
    },
    {
        label: "LinkedIn",
        value: "Connect with me",
        icon: Linkedin,
        color: "text-blue-600",
        bg: "bg-blue-600/10",
        border: "border-blue-600/20",
        link: "https://www.linkedin.com/in/manojk-datascience/" // Inferred placeholder or generic
    },
    {
        label: "WhatsApp",
        value: "Chat on WhatsApp",
        icon: MessageCircle,
        color: "text-green-500",
        bg: "bg-green-500/10",
        border: "border-green-500/20",
        link: "https://wa.me/9042099020" // Placeholder
    },
    {
        label: "Phone",
        value: "+91 9042099020",
        icon: Phone,
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20",
        link: "tel:+919042099020"
    }
];

export default function ContactModal() {
    const { isOpen, closeContact } = useContact();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                        onClick={closeContact}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-card border border-card-border p-6 rounded-2xl shadow-2xl z-[70] m-4"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Get in Touch</h2>
                            <button
                                onClick={closeContact}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactOptions.map((option) => (
                                <Link
                                    key={option.label}
                                    href={option.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-xl border ${option.border} ${option.bg} hover:scale-105 transition-transform group flex flex-col gap-3`}
                                >
                                    <div className={`p-2 rounded-lg bg-background/50 w-fit ${option.color}`}>
                                        <option.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-semibold">{option.label}</div>
                                        <div className="text-sm text-secondary truncate">{option.value}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
