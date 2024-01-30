import Link from "next/link";

export default function Hobby() {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-4 gap-4">
            <div className="h-60 w-full bg-slate-600 items-center justify-center flex flex-col rounded-lg">
                <h2>{}</h2>
            </div>
            <Link
                href="/art"
                className="h-60 w-full bg-slate-600 items-center justify-center flex flex-col rounded-lg lg:col-span-2"
            >
                <h2>Art</h2>
            </Link>
            <div className="bg-slate-600 items-center justify-center flex flex-col h-60 w-full rounded-lg lg:col-span-2">
                <h2>Blog</h2>
                <h2 className="text-6xl">🗒️</h2>
            </div>
            <Link
                href="/about/books"
                className="bg-slate-600 items-center justify-center flex flex-col h-60 w-full rounded-lg"
            >
                <h2>Books</h2>
                <p className="text-6xl">📚</p>
            </Link>
        </div>
    );
}
