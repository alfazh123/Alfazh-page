import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CardBlog from "../ui/blog/card-blog";
import { Metadata } from "next";
import SideBar from "../ui/blog/side-bar";

export const metadata: Metadata = {
    title: {
        template: " %s | Blog | Alfazh",
        default: "Blog",
    },
};

const tags = ["All", "JavaScript", "React", "Next.js", "TailwindCSS"];

export default function Blog({
    searchParams,
}: {
    searchParams: { tag: string };
}) {
    try {
        const blogDir = "./app/posts";

        const files = fs.readdirSync(path.join(blogDir));

        const blogs = files.map((filename) => {
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

        const tag = searchParams.tag || "All";
        console.log(tag);

        return (
            <div>
                <h1 className="font-bold text-3xl mb-4">Blog</h1>
                <div className="md:flex md:space-x-4 space-x-0">
                    <SideBar tags={tags} />
                    <ul className="sm:grid md:grid-cols-2 gap-4 flex flex-col w-full">
                        {blogs.map((blog) => (
                            <li
                                key={blog.slug}
                                className={`${
                                    blog.meta.tags === tag || tag === "All"
                                        ? ""
                                        : "hidden"
                                }`}
                            >
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
            </div>
        );
    } catch (error) {
        console.error(error);
        return <div>Error</div>;
    }
}
