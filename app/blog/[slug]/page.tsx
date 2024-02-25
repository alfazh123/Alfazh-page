import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

export async function generateStaticParams() {
    const files = fs.readdirSync(path.join("blog"));

    const paths = files.map((filename) => ({
        slug: filename.replace(".mdx", ""),
    }));

    return paths;
}

// export async function generateMetaData({ slug }: { slug: string }) {
//     const markDownFile = fs.readFileSync(
//         path.join("blog", `${slug}.mdx`),
//         "utf-8"
//     );

//     const { data: fronMatter } = matter(markDownFile);
//     console.log(fronMatter.title);

//     const metadata: Metadata = {
//         title: fronMatter.title,
//     };

//     return metadata.title;
// }

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const markDownFile = fs.readFileSync(
        path.join("blog", `${params.slug}.mdx`),
        "utf-8"
    );

    const { data: frontMatter } = matter(markDownFile);
    console.log(frontMatter.title);

    const metadata: Metadata = {
        title: frontMatter.title,
    };

    return metadata;
}

// export async function generateMetaData({
//     slug,
// }: {
//     slug: string;
// }): Promise<Metadata> {
//     const markDownFile = fs.readFileSync(
//         path.join("blog", `${slug}.mdx`),
//         "utf-8"
//     );

//     const { data: fronMatter } = matter(markDownFile);
//     console.log(fronMatter.title);

//     const metadata: Metadata = {
//         title: fronMatter.title,
//     };

//     return metadata;
// }

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
        <div>
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
                <div>
                    <span>{props.fronMatter.tag}</span>
                </div>
            </article>
        </div>
    );
}
