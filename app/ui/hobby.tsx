import Image from "next/image";
import Link from "next/link";
import Skill from "./hobby/skill";

export default function Hobby() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-4 gap-4">
            <div className=" h-40 w-full dark:bg-slate-600 bg-[#DFD8BC] items-center justify-center flex flex-col rounded-lg">
                <Skill />
            </div>
            <div className="md:relative lg:col-span-2">
                <div className="md:absolute w-full h-40 md:block hidden">
                    <Image
                        src="/hobby/bg-art.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full rounded-lg grayscale"
                    />
                </div>
                <Link
                    href="/art"
                    className="md:absolute h-40 w-full dark:bg-slate-600 bg-[#DFD8BC] items-center justify-center flex flex-col rounded-lg hover:opacity-90 hover:ease-in-out hover:transition-all duration-700"
                >
                    <h2>Art</h2>
                    <Image
                        src="/hobby/art.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="w-20"
                    />
                </Link>
            </div>
            <div className="md:relative lg:col-span-2">
                <div className="h-40 w-full absolute md:block hidden">
                    <Image
                        src="/hobby/bg-art.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full rounded-lg grayscale"
                    />
                </div>
                <Link
                    href="/blog"
                    className="dark:bg-slate-600 bg-[#DFD8BC] md:absolute items-center justify-center flex flex-col  h-40 w-full rounded-lg hover:opacity-90 hover:ease-in-out hover:transition-all duration-700"
                >
                    <h2>Blog</h2>
                    <Image
                        src="/hobby/blog.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="w-20"
                    />
                </Link>
            </div>
            <div className="md:relative">
                <div className="h-40 w-full md:absolute md:block hidden">
                    <Image
                        src="/hobby/bg-art.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full rounded-lg grayscale"
                    />
                </div>
                <Link
                    href="/about/books"
                    className="dark:bg-slate-600 bg-[#DFD8BC] items-center md:absolute justify-center flex flex-col h-40 w-full rounded-lg hover:opacity-90 hover:ease-in-out hover:transition-all duration-700"
                >
                    <h2>Books</h2>
                    <Image
                        src="/hobby/book.png"
                        alt="Picture of the author"
                        width={300}
                        height={300}
                        className="w-20"
                    />
                </Link>
            </div>
        </div>
    );
}
