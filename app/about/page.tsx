import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <Link href="/about/books">
                <button>Books</button>
            </Link>
        </div>
    );
}