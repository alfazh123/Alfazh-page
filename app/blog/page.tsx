import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Metadata } from "next";

import CardBlog from "@/app/components/blog/card-blog";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog by Alfazh",
};

export default function Blog() {
    try {
        const blogDir = "./posts";

        const files = fs.readdirSync(path.join(blogDir));

        const blogs = files.map((filename: any) => {
            const fileContent = fs.readFileSync(
                path.join(blogDir, filename),
                "utf-8"
            );

            const { data: fronMatter } = matter(fileContent);
            return {
                meta: fronMatter,
                slug: filename.replace(".mdx", ""),
            };
        });

        return (
            <div>
                <h1 className="font-bold text-3xl mb-4 pt-32">Blog</h1>
                <ul className="gap-4 flex flex-col w-full">
                    {blogs.map((blog) => (
                        <li key={blog.slug}>
                            <CardBlog
                                title={blog.meta.title}
                                description={blog.meta.description}
                                date={blog.meta.date}
                                link={`/blog/${blog.slug}`}
                                tag={blog.meta.tags}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div>Error</div>;
    }
}
