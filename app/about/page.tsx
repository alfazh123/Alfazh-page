import Link from "next/link";
import Skill from "../ui/hobby/skill";
import CardList from "../ui/about/card-list";
import MusicCard from "../ui/about/music-card";
import { db } from "../lib/db";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
};

const uses = ["Lenovo Ideapad 3 15ARE05", "Samsung A12"];

const interest = ["Web Development", "Design", "Write Blogs"];

const music = [
    {
        link: "https://open.spotify.com/embed/track/3x3rREiGYpZFooxt9OZMAy?utm_source=generator",
    },
    {
        link: "https://open.spotify.com/embed/track/2LBqCSwhJGcFQeTHMVGwy3?utm_source=generator",
    },
    {
        link: "https://open.spotify.com/embed/track/3x3rREiGYpZFooxt9OZMAy?utm_source=generator",
    },
];

export default function About() {
    return (
        <div className="px-4">
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
                <div className="bg-[#DFD8BC] dark:bg-slate-800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Tech Tools</h3>
                    <div className="flex justify-center items-center">
                        <Skill />
                    </div>
                </div>
                <div className="bg-[#DFD8BC] dark:bg-slate-800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Uses</h3>
                    <CardList list={db.uses} />
                </div>
                <div className="bg-[#DFD8BC] dark:bg-slate-800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Music</h3>
                    <MusicCard music={db.music} />
                </div>
                <div className="bg-[#DFD8BC] dark:bg-slate-800 p-4 rounded-md">
                    <h3 className="text-lg font-semibold">Interest or hobby</h3>
                    <CardList list={db.interest} />
                </div>
                <div className="bg-[#DFD8BC] dark:bg-slate-800 p-4 rounded-md col-span-2">
                    <h3 className="text-lg font-semibold">Photo&apos;s</h3>
                    <ul className="flex gap-5 snap-x overflow-x-auto snap-mandatory [&_li]:mb-2 no-scrollbar">
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            1
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            2
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            3
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            4
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            1
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            2
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            3
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            4
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            1
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            2
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            3
                        </li>
                        <li className="dark:bg-slate-700 bg-slate-300 rounded-md h-32 w-32 flex justify-center items-center shrink-0 snap-start">
                            4
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div>
                <h3>Uses</h3>
                <p>
                    Here are some of the technologies that I use and some of the
                    tools that I use to make my project.
                </p>
                <div>
                    <h4>Front End</h4>
                    <ul>
                        <li>NextJs</li>
                        <li>Tailwind</li>
                        <li>React</li>
                    </ul>

                    <h4>Tools</h4>
                    <ul>
                        <li>VS Code</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Figma</li>
                        <li>Photoshop</li>
                        <li>Lenovo Ideapad 3 15ARE05</li>
                        <li>Samsung Galaxy A12</li>
                    </ul>

                    <h4>Others</h4>
                    <ul>
                        <li>Linux</li>
                        <li>Windows</li>
                    </ul>

                    <h4>Interest</h4>
                    <ul>
                        <li>Art</li>
                        <li>Design</li>
                    </ul>

                    <h4>Other</h4>
                    <ul>
                        <li>Music</li>
                        <li>Game</li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
}
