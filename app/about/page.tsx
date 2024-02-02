import Link from "next/link";

export default function About() {
    return (
        <div className="px-4">
            <div className="mb-4">
                <h1 className="text-3xl font-bold">Hi, I&apos;m Alfazh</h1>
                <h2 className="text-xl font-bold mb-4">
                    Front End Developer from Surabaya
                </h2>
                <p className="md:w-1/2 sm:w-5/6 md:text-xl">
                    Hi, I&apos;m Ahmd Mufahras Li aLfazh Assardew, I&apos;m a
                    Front End Developer. I have been in this field since 2022
                    when i entered college, I learn about web development and
                    stuff like that, gaining from that I got a lot of amazing
                    things that I didn&apos;t know
                    <br />
                    <br />I enjoy to learn something new and work with so i can
                    have other opinion about something, and i hope i can help
                    someone with my work. I&apos;m also like doing art like
                    drawing digital or traditional. You can see my art and my
                    blog on this website.
                </p>
            </div>

            <div>
                <h2>Photo&apos;s</h2>
                <p></p>
            </div>

            <Link href="/about/books">
                <button>Books</button>
            </Link>
        </div>
    );
}
