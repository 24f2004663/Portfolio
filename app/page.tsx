import Hero from "@/components/Hero";
import StatsGrid from "@/components/StatsGrid";
import ProjectCard, { ProjectProps } from "@/components/ProjectCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredProjects: ProjectProps[] = [
  {
    title: "Aarogya Sarthi",
    description: "AI-powered healthcare assistant providing personalized medical advice and appointment scheduling.",
    tags: ["Python", "Next.js", "TensorFlow", "NLP"],
    isLive: false,
    demoLink: "https://aarogya-sarthi.netlify.app/",
    codeLink: "https://github.com/nocaptbsm/aarogya-_sarthi",
    image: "/aarogya-sarthi.png",
  },
  {
    title: "FedEx Smart Recovery",
    description: "Developed a full-stack debt recovery system featuring an intelligent Python-based allocation engine that optimizes case distribution based on agency performance and capacity. The application utilizes a Next.js/React frontend for real-time SLA monitoring, seamless agency collaboration, and automated breach detection.",
    tags: ["Next.js", "Python", "PostgreSQL", "BullMQ"],
    isLive: true,
    demoLink: "https://teamseeker.online/login",
    codeLink: "https://github.com/24f2004663/Fed-Ex-Team-Seekers",
    image: "/fedex-recovery.png",
  },
  {
    title: "Habit-Track",
    description: "Apex Protocol is a high-fidelity, passive productivity tracking ecosystem designed to give you better visibility into your digital habits. It combines a stealthy Chrome Extension  with a powerful Command Dashboard.",
    tags: ["TypeScript", "JavaScript", "CSS", "HTML", "Node.js"],
    isLive: true,
    demoLink: "https://www.habittrack.online",
    codeLink: "https://github.com/24f2004663/Habit-Track",
    image: "/habit-track.png",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      <StatsGrid />

      <section className="px-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured <span className="text-accent">Projects</span></h2>
          <Link href="/projects" className="flex items-center gap-2 text-secondary hover:text-accent transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
