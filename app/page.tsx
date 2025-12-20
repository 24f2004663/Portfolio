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
    isLive: true,
    demoLink: "https://example.com",
    codeLink: "https://github.com/example/aarogya-sarthi",
    // image: "/project1.png" // Placeholder
  },
  {
    title: "Project-Pho-Die",
    description: "Advanced image processing tool for restoring and colorizing old photographs using GANs.",
    tags: ["Python", "PyTorch", "React", "FastAPI"],
    isLive: true,
    demoLink: "https://example.com",
    codeLink: "https://github.com/example/pho-die",
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
