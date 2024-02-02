import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
    title: string;
    description: string;
    src: string;
    href: string;
    tag?: string[];
}

export default function ProjectCard({
    title,
    src,
    description,
    href,
    tag,
}: ProjectCardProps) {
    return (
        <div className="flex flex-col dark:bg-slate-800 shadow-2xl transition ease-in-out delay-150 border-solid border-2 hover:scale-105 border-slate-600 hover:border-slate-400 duration-300 w-full rounded-lg">
            <Link href={href} className="m-2">
                <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full aspect-auto rounded-md "
                />
                <div className="items-center ">
                    <h3 className="text-lg font-bold my-3 mx-1">{title}</h3>
                    <div className="justify-between mb-4">
                        {tag?.map((tag) => (
                            <p
                                key={tag}
                                className="border-solid border-2 font-semibold border-slate-200 px-2 py-1 rounded-md text-sm inline-block mx-1"
                            >
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
}
