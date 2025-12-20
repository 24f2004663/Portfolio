'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectProps } from '@/components/ProjectCard';
import { Search } from 'lucide-react';

const allProjects: ProjectProps[] = [
    {
        title: "Aarogya Sarthi",
        description: "AI-powered healthcare assistant providing personalized medical advice and appointment scheduling.",
        tags: ["Python", "Next.js", "TensorFlow", "NLP"],
        isLive: true,
        demoLink: "https://example.com",
        codeLink: "https://github.com/example/aarogya-sarthi",
    },
    {
        title: "Project-Pho-Die",
        description: "Advanced image processing tool for restoring and colorizing old photographs using GANs.",
        tags: ["Python", "PyTorch", "React", "FastAPI"],
        isLive: true,
        demoLink: "https://example.com",
        codeLink: "https://github.com/example/pho-die",
    },
    {
        title: "Smart Home IoT",
        description: "IoT based home automation system using ESP32 and MQTT.",
        tags: ["C++", "IoT", "MQTT", "React"],
        isLive: false,
        codeLink: "https://github.com/example/smart-home",
    },
    {
        title: "Portfolio V1",
        description: "My first portfolio website built with HTML/CSS and Vanilla JS.",
        tags: ["HTML", "CSS", "JavaScript"],
        isLive: true,
        demoLink: "https://example.com/v1",
        codeLink: "https://github.com/example/portfolio-v1",
    }
];

const categories = ["All", "Data Science", "Web Dev", "Hardware/IoT"];

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = allProjects.filter(project => {
        const matchesCategory = activeCategory === "All" ||
            (activeCategory === "Data Science" && (project.tags.includes("Python") || project.tags.includes("TensorFlow"))) ||
            (activeCategory === "Web Dev" && (project.tags.includes("React") || project.tags.includes("Next.js") || project.tags.includes("HTML"))) ||
            (activeCategory === "Hardware/IoT" && (project.tags.includes("IoT") || project.tags.includes("C++")));

        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="min-h-screen py-20 px-4 max-w-7xl mx-auto">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
            >
                All <span className="text-accent">Projects</span>
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                    ? "bg-accent text-white"
                                    : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-secondary" />
                    <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full bg-secondary/10 border border-transparent focus:border-accent focus:bg-secondary/20 outline-none transition-all text-sm"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center text-secondary py-20">
                    No projects found matching your criteria.
                </div>
            )}
        </div>
    );
}
