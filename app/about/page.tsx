import Link from "next/link";

export default function About() {
    return (
        <div>
            <div className="mb-4">
                <h1 className="text-3xl font-bold">Hi, I'm Alfazh</h1>
                <h2 className="text-xl font-bold mb-4">
                    Front End Developer from Surabaya
                </h2>
                <p className="md:w-1/2 sm:w-5/6 md:text-xl">
                    Hi, I'm Ahmd Mufahras Li aLfazh Assardew, I'm a Front End
                    Developer. I have been in this field since 2022 when i
                    entered college, I learn about web development and stuff
                    like that, gaining from that I got a lot of amazing things
                    that I didn't know
                    <br />
                    <br />I enjoy to learn something new and work with so i can
                    have other opinion about something, and i hope i can help
                    someone with my work. I'm also like doing art like drawing
                    digital or traditional. You can see my art and my blog on
                    this website.
                </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-2 mt-4 gap-4">
                <div className="h-60 w-full bg-slate-600 items-center justify-center flex flex-col rounded-lg">
                    <h2>Skill</h2>
                </div>
                <div className="h-60 w-full bg-slate-600 items-center justify-center flex flex-col rounded-lg md:col-span-2">
                    <h2>Art</h2>
                </div>
                <div className="bg-slate-600 items-center justify-center flex flex-col h-60 w-full rounded-lg md:col-span-2">
                    <h2>Blog</h2>
                    <h2 className="text-6xl">🗒️</h2>
                </div>
                <div className="bg-slate-600 items-center justify-center flex flex-col h-60 w-full rounded-lg">
                    <h2>Books</h2>
                    <p className="text-6xl">📚</p>
                </div>
            </div>

            <div>
                <h2>Photo's</h2>
                <p></p>
            </div>

            <Link href="/about/books">
                <button>Books</button>
            </Link>
        </div>
    );
}
