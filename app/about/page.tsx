import Link from "next/link";
import { Metadata } from "next";

import Skill from "@/app/components/hobby/skill";
import CardList from "@/app/components/about/card-list";
import MusicCard from "@/app/components/about/music-card";
import { db } from "@/app/lib/lib";

export const metadata: Metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className="px-4 pt-32">
            <div className="mb-10">
                <h1 className="text-3xl font-bold">Hi, I&apos;m Alfazh</h1>
                <h2 className="text-xl font-bold mb-4">
                    Front End Developer from Surabaya
                </h2>
                <p className="md:w-1/2 sm:w-5/6 md:text-xl">
                    Hi, I&apos;m Ahmd Mufahras Li aLfazh Assardew, I&apos;m a
                    Front End Developer. I have been in this field since 2022
                    when i entered college, I learn about web development and
                    stuff like that, gaining from that I got a lot of amazing
                    things that I didn&apos;t know
                    <br />
                    <br />I enjoy to learn something new and work with so i can
                    have other opinion about something, and i hope i can help
                    someone with my work. I&apos;m also like doing art like
                    drawing digital or traditional. You can see my art 🎨 and my
                    blog 🗒️ on this website.
                </p>
            </div>

            <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
                <div className="bg-sand dark:bg-slate800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Tech Tools</h3>
                    <div className="flex justify-center items-center">
                        <Skill />
                    </div>
                </div>
                <div className="bg-sand dark:bg-slate800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Uses</h3>
                    <CardList list={db.uses} />
                </div>
                <div className="bg-sand dark:bg-slate800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Music</h3>
                    <MusicCard music={db.music} />
                </div>
                <div className="bg-sand dark:bg-slate800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Interest or hobby</h3>
                    <CardList list={db.interest} />
                </div>
                <div className="bg-sand dark:bg-slate800 p-4 rounded-md col-span-2">
                    <h3 className="text-lg font-semibold">Photo&apos;s</h3>
                    <ul className="flex gap-5 snap-x overflow-x-auto snap-mandatory [&_li]:mb-2 no-scrollbar">
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            1
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            2
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            3
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            4
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            1
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            2
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            3
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            4
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            1
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            2
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            3
                        </li>
                        <li className="dark:bg-slate700 bg-slate200 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            4
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
