import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("blog"));

    const paths = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return paths;
}

function getPost({ slug }: { slug: string }) {
    const markDownFile = fs.readFileSync(
        path.join("blog", `${slug}.mdx`),
        "utf-8"
    );

    const { data: fronMatter, content } = matter(markDownFile);

    return {
        fronMatter,
        slug,
        content,
    };
}

export default function Blog({ params }: any) {
    const props = getPost(params);

    return (
        <article
            className="flex flex-col prose 
        dark:prose-h1:text-slate-300 
        dark:prose-h2:text-slate-300 
        dark:prose-h3:text-slate-300 
        dark:prose-h4:text-slate-300
        dark:prose-h5:text-slate-300
        dark:prose-h6:text-slate-300
        dark:prose-2xl:text-slate-300
        dark:prose-xl:text-slate-300
        dark:prose-lg:text-slate-300
        dark:prose-md:text-slate-300
        dark:prose-sm:text-slate-300
        dark:prose-xs:text-slate-300
        dark:prose-a:text-slate-200
        hover:prose-a:text-emerald-300
        dark:hover:prose-a:text-emerald-300
        dark:prose-slate-200
        dark:hover:after:prose-headings:content-['🔗']
        dark:hover:prose-headings:underline
        dark:text-slate-200 prose-sm md:prose-base lg:prose-lg !prose-slate progress-invert m-auto"
        >
            <header className="border-solid border-b-2 dark:border-slate-200 border-slate-800">
                <h1>{props.fronMatter.title}</h1>
                <p>{props.fronMatter.date}</p>
            </header>
            <MDXRemote source={props.content} />
        </article>
    );
}