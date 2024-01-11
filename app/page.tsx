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

export default function Home() {
  return (
    <main className="flex flex-col mx-auto w-3/4  text-justify space-y-20 mb-10">
      <header className="static  bg-slate-700 mt-32 rounded-lg h-96 w-full">
        <div className="static end-0 mt-32 left-0 bottom-0 inset-x-0 px-4 py-3 md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">Hi, I'm Alfazh</h1>
          <p className="">
            I'm a Front End Engginer at Surabaya. Personally I'm using NextJS,
            Tailwind, MDX, I'm a self-taught developer and I love to learn new
            things. I'm currently learning at State University of Surabaya.
          </p>
        </div>
      </header>

      <div className="flex flex-col mt-10">
        <h3 className="text-lg font-semibold">Skills</h3>
        <div className="flex flex-wrap gap-5">
          {skills.map(({ skill }) => (
            <Skill key={skill} skill={skill} />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Some Project</h3>
        <p className="text-gray-500">
          Here's latest project that I've been working on
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
          <ProjectCard
            title="ACE 2024"
            description="NextJS is a React Framework for production"
            src="/next.svg"
            link="https://ace2024.vercel.app"
          />
          <ProjectCard
            title="Redesign KediriKab"
            description="Tailwind is a utility-first CSS framework"
            src="/next.svg"
            link="https://github.com/alfazh123/redesign_kedirikab"
          />
          <ProjectCard
            title="NodeJS"
            description="NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine"
            src="/next.svg"
            link="nodejs"
          />
        </div>
      </div>
    </main>
  );
}
