import ProjectCard from "@/app/components/project-card";
import { db } from "@/app/lib/lib";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project",
};

export default function Project() {
    return (
        <div className="flex flex-col space-y-20 px-4 pt-32">
            <h1 className="font-bold text-6xl">Project</h1>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                {db.projects.map((project, index) => (
                    <div key={index}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            src={project.src}
                            href={project.href}
                            tag={project.tag}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
