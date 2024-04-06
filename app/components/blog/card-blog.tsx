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
                        <p className="text-sm text-slate-400">{date}</p>
                    </div>
                    <div className="flex [&_p]:px-2 [&_p]:py-1 [&_p]:border-solid [&_p]:border [&_p]:border-slate700 dark:[&_p]:border-slate200 [&_p]:rounded-md gap-2 ">
                        <p>{tag}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
