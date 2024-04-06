import Link from "next/link";

export const AboutButton = () => {
    return (
        <Link href="/about" className="my-4">
            <button
                type="button"
                className=" border-solid border-2 dark:border-slate200 border-slate700 dark:hover:bg-slate200 hover:bg-slate700 hover:text-slate200 dark:hover:text-slate800 px-3 py-2 rounded-lg"
            >
                About Me
            </button>
        </Link>
    );
};
