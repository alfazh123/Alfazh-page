import { CardProject } from "../ui/project-card";

const projects = [
    {
        title: "ACE 2024",
        description: "NextJS is a React Framework for production",
        src: "/ace2024.png",
        link: "https://ace2024.vercel.app",
        tag: ["NextJS", "Tailwind", "MDX", "TS"],
    },
    {
        title: "Redesign KediriKab",
        description: "Tailwind is a utility-first CSS framework",
        src: "/next.svg",
        link: "",
    },
];

export default function Project() {
    return (
        <div className="min-h-screen flex flex-col space-y-20 px-4">
            <h1 className="font-bold text-6xl">Project</h1>
            <div className="flex flex-col space-y-4">
                {projects.map((project, index) => (
                    <div key={index}>
                        <CardProject
                            title={project.title}
                            description={project.description}
                            src={project.src}
                            href={project.link}
                            tag={project.tag}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
