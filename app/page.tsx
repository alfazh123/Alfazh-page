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
        tag: ["NextJS", "MDX"],
    },
    {
        title: "Redesign KediriKab",
        description: "Tailwind is a utility-first CSS framework",
        src: "/next.svg",
        href: "https://github.com/alfazh123/redesign_kedirikab",
        tag: ["NextJS"],
    },
];

export default function Home() {
    return (
        <main className="flex flex-col mb-10 px-4">
            <div className="min-h-3/4 static flex justify-center bg-slate-600 p-5 rounded-lg mb-20">
                <header className="static bottom-0 left-0 rounded-lg min-h-96 w-full">
                    <div className="mt-32 py-3 lg:w-1/2 space-y-5">
                        <h1 className="text-6xl font-bold">Hi, I'm Alfazh</h1>
                        <p className="text-xl text-justify">
                            I'm a Front End Developer from Surabaya. Personaly
                            I'm using NextJs and Tailwind for My Project. I'm a
                            student at State University of Surabaya, I'm
                            currently learning about Web Development and BackEnd
                            Development. Fell free to contact me if you want to
                            work with. 😁
                        </p>
                    </div>
                    <Link href="/about">
                        <button className=" border-solid border-2 border-slate-200 hover:overflow-hidden hover:bg-slate-200 hover:text-slate-800 hover:origin-top-right hover:transition-all hover:duration-300  px-3 py-2 rounded-lg">
                            About Me
                        </button>
                    </Link>
                </header>
            </div>
            {/* 
            <div className="flex md:flex-row flex-col md:space-x-10 space-x-0"> */}
            <div className="space-y-2 mb-10">
                <h3 className="text-lg font-semibold">Some Project</h3>
                <p className="text-gray-500">
                    Here's latest project that I've been working on
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                    <Link href="/project" className="">
                        <div className="bg-slate-600 rounded-lg p-5 h-full flex flex-col justify-center items-center">
                            <h3 className="text-2xl font-semibold">
                                More Project
                            </h3>
                            <p className="text-gray-500">
                                You can see more project on my github
                            </p>
                            <p>See more</p>
                        </div>
                    </Link>
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

            {/* </div> */}
        </main>
    );
}
