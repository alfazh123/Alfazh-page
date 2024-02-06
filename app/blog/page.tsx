import fs from "fs";
import path from "path";
import matter from "gray-matter";
import CardBlog from "../ui/blog/card-blog";

export default function Blog() {
    const blogDir = "blog";

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

    return (
        <div>
            <h1 className="font-bold text-3xl mb-4">Blog</h1>
            <ul className="sm:grid md:grid-cols-3 sm:grid-cols-2 gap-4 flex flex-col">
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
}
