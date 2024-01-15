import Image from "next/image";
import Link from "next/link";
import Skill from "./ui/skill";
import ProjectCard from "./ui/project-card";

const skills = [
  {
    skill: "NextJS",
  },
  {
    skill: "Tailwind",
  },
  {
    skill: "NodeJS",
  },
];

const projects = [
  {
    title: "ACE 2024",
    description: "NextJS is a React Framework for production",
    src: "/ace2024.png",
    href: "https://ace2024.vercel.app",
    tag: ["NextJS", "Tailwind", "MDX", "TS"],
  },
  {
    title: "Redesign KediriKab",
    description: "Tailwind is a utility-first CSS framework",
    src: "/next.svg",
    href: "https://github.com/alfazh123/redesign_kedirikab",
    tag: ["NextJS", "Tailwind", "JS"],
  },
];

export default function Home() {
  return (
    <main className="flex flex-col text-justify space-y-20 mb-10 px-4">
      <div className="min-h-3/4 flex justify-center">
        <header className="rounded-lg h-96 w-full">
          <div className="mt-32 py-3 md:w-1/2 space-y-5">
            <h1 className="text-6xl font-bold">Hi, I'm Alfazh</h1>
            <p className="text-xl">
              I'm a Front End Engginer at Surabaya. Personally I'm using NextJS,
              Tailwind, MDX, I'm a self-taught developer and I love to learn new
              things. I'm currently learning at State University of Surabaya.
            </p>
          </div>
          <Link href="/about">
            <button className="text-slate-200 border-solid border-2 border-slate-200 px-4 py-2 rounded-full hover:bg-slate-200 hover:text-slate-900">
              About Me
            </button>
          </Link>
        </header>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Some Project</h3>
        <p className="text-gray-500">
          Here's latest project that I've been working on
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-5">
          {skills.map(({ skill }) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </div>
    </main>
  );
}
