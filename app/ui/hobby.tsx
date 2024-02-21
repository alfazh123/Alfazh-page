import Image from "next/image";
import Link from "next/link";
import Skill from "./hobby/skill";

export default function Hobby() {
    return (
        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:space-y-0 space-y-4 gap-4 justify-center">
            <div className="p-2 border-solid border-2 rounded-md border-[#381E70] dark:border-[#EAF7DF] flex flex-col">
                <h1 className="font-bold text-2xl">Tech Stack</h1>
                <div className="flex justify-center items-center">
                    <Skill />
                </div>
            </div>
            <div className="flex relative sm:flex-row flex-col sm:items-center sm:justify-between p-2 border-solid border-2 rounded-md border-[#381E70] dark:border-[#EAF7DF] h-32 sm:h-full">
                <section>
                    <h1 className="font-bold text-2xl">Book</h1>
                    <p className="italic">Books i&apos;ve read.</p>
                </section>
                <div className="sm:h-32 h-20 w-1/2 bottom-0 right-0 absolute sm:static">
                    <Image
                        src="/bookcard.svg"
                        alt="Picture of the author"
                        width={250}
                        height={250}
                        className="sm:rounded-l-full rounded-tl-full h-full w-full object-cover"
                    />
                </div>
            </div>
            <div className="flex relative sm:flex-row flex-col sm:items-center sm:justify-between p-2 border-solid border-2 rounded-md border-[#381E70] dark:border-[#EAF7DF] h-32 sm:h-full">
                <section>
                    <h1 className="font-bold text-2xl">Blogs</h1>
                    <p className="italic">Blogs</p>
                </section>
                <div className="sm:h-32 h-20 w-1/2 bottom-0 right-0 absolute sm:static">
                    <Image
                        src="/blogcard.svg"
                        alt="Picture of the author"
                        width={250}
                        height={250}
                        className="sm:rounded-l-full rounded-tl-full h-full w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
