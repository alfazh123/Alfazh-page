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
        <div className="group flex flex-col dark:bg-slate-800 bg-[#DFD8BC] shadow-2xl transition ease-in-out delay-150  hover:scale-105  duration-300 w-full rounded-lg">
            <Link href={href} className="m-2">
                <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full aspect-auto rounded-md "
                />
                <div className="items-center">
                    <h3 className="text-lg font-bold mt-3 mx-1 group-hover:underline">
                        {title}
                    </h3>
                    <p className="text-sm mx-1 mb-3">{description}</p>
                    <div className="justify-between mb-4">
                        {tag?.map((tag) => (
                            <p
                                key={tag}
                                className="border-solid border-2 font-semibold dark:border-slate-200 border-[#381E70] px-2 py-1 rounded-md text-sm inline-block mx-1"
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
