import Link from "next/link";

interface CardBlogProps {
    title: string;
    description: string;
    date: string;
    link: string;
    tag?: string[];
}

export default function CardBlog({
    title,
    description,
    date,
    link,
    tag,
}: CardBlogProps) {
    return (
        <div className="group border-solid border dark:border-slate200 border-slate700  p-4 rounded-lg ">
            <Link href={link} className="">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold group-hover:underline group-hover:underline-offset-1">
                            {title}
                        </h2>
                        <p>{description}</p>
                        <div className="inline-flex gap-4 justify-center items-center">
                            <p className="text-sm text-slate-400">{date}</p>
                            <p className="flec px-3l py-1 bg-sand100 rounded-full text-sm">
                                {tag}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
