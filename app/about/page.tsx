'use client';

import { motion } from 'framer-motion';
import TechStack from '@/components/TechStack';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto flex flex-col gap-20">

            {/* Split Screen Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-accent">Me</span>
                    </h1>
                    <div className="space-y-4 text-secondary text-lg leading-relaxed">
                        <p>
                            Hi, I'm Manoj. My journey started with exploring Linux kernels and has evolved into building sophisticated AI chatbots and data-driven applications.
                        </p>
                        <p>
                            As a Data Science undergraduate at IIT Madras, I blend theoretical knowledge with practical engineering. I'm passionate about solving real-world problems using machine learning, computer vision, and scalable web technologies.
                        </p>
                        <p>
                            When I'm not coding, you can find me optimizing algorithms on LeetCode or exploring the latest in IoT hardware.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-card-border bg-card"
                >
                    {/* Placeholder for Profile Image */}
                    <div className="absolute inset-0 flex items-center justify-center text-secondary bg-secondary/10">
                        Profile Image Placeholder
                    </div>
                </motion.div>
            </div>

            {/* Timeline Section */}
            <section>
                <h2 className="text-3xl font-bold mb-10 text-center">Education & <span className="text-accent">Journey</span></h2>
                <div className="relative border-l-2 border-card-border ml-4 md:ml-10 space-y-12 pl-8 md:pl-12">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-accent border-4 border-background" />
                        <div className="text-accent font-mono mb-2">2024 - Present</div>
                        <h3 className="text-xl font-bold">BS in Data Science & Applications</h3>
                        <div className="text-secondary">IIT Madras</div>
                        <p className="mt-2 text-secondary/80">
                            Specializing in Machine Learning and Big Data Analytics. Building a strong foundation in statistics and algorithmic thinking.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <span className="absolute -left-[41px] md:-left-[57px] top-0 w-5 h-5 rounded-full bg-secondary border-4 border-background" />
                        <div className="text-secondary font-mono mb-2">2022 - 2024</div>
                        <h3 className="text-xl font-bold">High School</h3>
                        <div className="text-secondary">Science Stream (PCM)</div>
                        <p className="mt-2 text-secondary/80">
                            Focused on Physics, Chemistry, and Mathematics. Started competitive programming and web development journey.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* Tech Stack Section */}
            <section>
                <h2 className="text-3xl font-bold mb-10 text-center">Tech <span className="text-accent">Stack</span></h2>
                <TechStack />
            </section>

        </div>
    );
}
