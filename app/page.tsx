import Image from "next/image";
import Link from "next/link";
import ProjectCard from "./ui/project-card";
import { db } from "@/app/lib/db";
import Hobby from "./ui/hobby";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {
    return (
        <main className="flex flex-col mb-10 px-4">
            <div className="min-h-3/4 flex sm:justify-center p-5 rounded-lg mb-20">
                <header className="rounded-lg  w-full md:flex md:flex-row md:justify-between  flex flex-col-reverse">
                    <div className="flex flex-col justify-center md:w-1/2">
                        <div className="py-3 space-y-5">
                            <h1 className="md:text-6xl text-3xl font-bold">
                                Hi, I&apos;m Alfazh
                            </h1>
                            <p className="md:text-xl text-base">
                                I&apos;m a Front End Developer from Surabaya.
                                Personaly I&apos;m using NextJs and Tailwind for
                                My Project. I&apos;m a student at State
                                University of Surabaya.
                            </p>
                        </div>
                        <Link href="/about">
                            <button className=" border-solid border-2 border-slate-200 hover:overflow-hidden hover:bg-slate-200 hover:text-slate-800 hover:origin-top-right hover:transition-all hover:duration-300  px-3 py-2 rounded-lg">
                                About Me
                            </button>
                        </Link>
                    </div>
                    <div className="flex md:justify-center items-center">
                        <Image
                            src="/profil.jpg"
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            className="md:rounded-xl rounded-full md:w-72 w-12 md:border-0 border-solid border-2 p-1 border-slate-200 md:hover:shadow-2xl cursor-pointer md:hover:scale-90 dark:md:hover:bg-slate-600 md:hover:bg-slate-300 md:hover:p-2 md:hover:transition-all duration-700 ease-in-out md:hover:skew-x-6 md:hover:-skew-y-6"
                        />
                    </div>
                </header>
            </div>

            <Link href="#content" className="flex justify-center items-center">
                <FaArrowDown className="text-4xl text-slate-600 cursor-pointer animate-bounce" />
            </Link>
            <div className="h-20" id="content"></div>
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
                    <Link href="/project">
                        <div className="dark:bg-slate-600 rounded-lg p-5 h-full flex flex-col justify-center items-center">
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

            <div className="flex flex-col md:h-96 md:mb-20">
                <h1 className="font-semibold text-2xl mt-10">
                    Some of My Hobby
                </h1>
                <Hobby />
            </div>
        </main>
    );
}
