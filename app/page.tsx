import Link from "next/link";
import ProjectCard from "./ui/project-card";
import db from "@/app/lib/db.json";
import Hobby from "./ui/hobby";

export default function Home() {
    return (
        <main className="flex flex-col mb-10 px-4">
            <div className="min-h-3/4 static flex justify-center bg-slate-600 p-5 rounded-lg mb-20">
                <header className="static bottom-0 left-0 rounded-lg min-h-96 w-full">
                    <div className="mt-32 py-3 lg:w-1/2 space-y-5">
                        <h1 className="text-6xl font-bold">
                            Hi, I&apos;m Alfazh
                        </h1>
                        <p className="text-xl text-justify">
                            I&apos;m a Front End Developer from Surabaya.
                            Personaly I&apos;m using NextJs and Tailwind for My
                            Project. I&apos;m a student at State University of
                            Surabaya, I&apos;m currently learning about Web
                            Development and BackEnd Development. Fell free to
                            contact me if you want to work with. 😁
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
                <h3 className="text-2xl font-semibold">Some Project</h3>
                <p className="text-gray-500">
                    Here&apos;s latest project that I&apos;ve been working on
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {db.projects.map((project, id) => (
                        <div className={`${id <= 2 ? "" : "hidden"}`} key={id}>
                            <ProjectCard key={id} {...project} />
                        </div>
                    ))}
                    <Link
                        href="/project"
                        className="border-solid border-2 border-slate-200"
                    >
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

            <h1 className="font-semibold text-2xl mt-10">Some of My Hobby</h1>
            <Hobby />

            {/* <div className="flex flex-col space-y-4">
                <h3 className="text-lg font-semibold">Skills</h3>
                <div className="flex flex-wrap gap-5">
                    {skills.map(({ skill }) => (
                        <Skill key={skill} skill={skill} />
                    ))}
                </div>
            </div> */}

            {/* </div> */}
        </main>
    );
}
