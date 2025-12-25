'use client';

import { motion } from 'framer-motion';
import TechStack from '@/components/TechStack';
import StatsGrid from '@/components/StatsGrid';
import Image from 'next/image';
import Link from 'next/link';

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
                            Hi, I'm Manoj K. I'm a Data Science undergraduate at IIT Madras focused on building data-driven systems, machine learning models, and scalable applications.
                        </p>
                        <Link
                            href="https://ds.study.iitm.ac.in/student/24F2004663"
                            target="_blank"
                            className="px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accent/90 transition-all flex items-center gap-2 group cursor-pointer"
                        >
                            View IIT-Madras Profile
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-[347px] h-[422px] rounded-2xl overflow-hidden border-[1.5px] border-orange-500/80 bg-card mx-auto md:ml-auto md:mr-0"
                >
                    <Image
                        src="/Manojphoto.jpg"
                        alt="Manoj"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </div>
            <section>
                <StatsGrid />
            </section>

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
                        <br />
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
            <section>
                <h2 className="text-3xl font-bold mb-10 text-center">Skills & <span className="text-accent">Strength</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Programming */}
                    <div className="bg-card border border-card-border p-6 rounded-2xl hover:border-accent/50 transition-colors">
                        <h3 className="text-xl font-bold mb-6 text-center text-accent">Programming</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {['Python', 'C++', 'JavaScript'].map((skill) => (
                                <div key={skill} className="bg-background/50 py-3 px-4 rounded-lg text-center font-medium hover:bg-accent/10 transition-colors border border-card-border/50">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Data Science */}
                    <div className="bg-card border border-card-border p-6 rounded-2xl hover:border-accent/50 transition-colors">
                        <h3 className="text-xl font-bold mb-6 text-center text-accent">Data Science</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {['Pandas', 'Scikit-learn', 'SQL'].map((skill) => (
                                <div key={skill} className="bg-background/50 py-3 px-4 rounded-lg text-center font-medium hover:bg-accent/10 transition-colors border border-card-border/50">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Web & Tools */}
                    <div className="bg-card border border-card-border p-6 rounded-2xl hover:border-accent/50 transition-colors">
                        <h3 className="text-xl font-bold mb-6 text-center text-accent">Web & Tools</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {['HTML/CSS', 'Git', 'Flask'].map((skill) => (
                                <div key={skill} className="bg-background/50 py-3 px-4 rounded-lg text-center font-medium hover:bg-accent/10 transition-colors border border-card-border/50">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
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
