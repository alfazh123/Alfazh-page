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
    <div>
      <h1>Project</h1>
      <div className="flex flex-wrap justify-center">
        {projects.map((project) => (
          <CardProject
            title={project.title}
            description={project.description}
            src={project.src}
            href={project.link}
            tag={project.tag}
          />
        ))}
      </div>
    </div>
  );
}
