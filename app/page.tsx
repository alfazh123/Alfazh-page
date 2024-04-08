import Image from "next/image";
import Link from "next/link";

import { db } from "@/app/lib/lib";

import ProjectCard from "./components/project-card";
import Hobby from "./components/hobby";
import { AboutButton } from "./components/button";
import { ProjectButton } from "./components/button";

import { FaArrowDown } from "react-icons/fa";

export default function Home() {
    return (
        <main className="flex flex-col mb-10 px-4">
            <div className="flex items-center h-screen flex-col justify-center gap-12 border-solid border-b-2 border-b-slate700 dark:border-b-slate300 relative">
                <header className="flex flex-col transition-all ease-in-out duration-700 absolute left-0">
                    <div>
                        <h1 className="lg:text-7xl md:text-6xl sm:text-4xl text-4xl font-bold gap-4">
                            Ahmd Alfazh <br />
                            Front-end Developer
                        </h1>
                    </div>
                    <p className="md:text-base text-xs pt-4">
                        Build a website with NextJs and TailwindCSS. I&apos;m a
                        student at State University of Surabaya.
                    </p>
                    <AboutButton />
                </header>
                <Link
                    href="#content"
                    className="flex flex-col justify-center items-center group scroll-smooth absolute bottom-10"
                >
                    <FaArrowDown className="text-4xl cursor-pointer animate-bounce" />
                    <div className="p-2 bg-slate600 rounded-full animate-ping absolute hidden group-hover:block"></div>
                </Link>
            </div>

            <div className="h-20" id="content"></div>
            <div className="space-y-2 mb-10">
                <h3 className="text-2xl font-semibold">Some Project</h3>
                <p className="text-gray-500">
                    Here&apos;s latest project that I&apos;ve been working on
                </p>
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5">
                    {db.projects.map((project, id) => (
                        <div className={`${id <= 2 ? "" : "hidden"}`} key={id}>
                            <ProjectCard key={id} {...project} />
                        </div>
                    ))}
                    <ProjectButton />
                </div>
            </div>

            <div className="flex flex-col md:h-96 md:mb-20">
                <h1 className="font-semibold text-2xl mt-10 pb-4">
                    Some of My Hobby
                </h1>
                <Hobby />
            </div>
        </main>
    );
}
