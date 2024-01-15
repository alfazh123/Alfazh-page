import Image from "next/image";

export default function Art() {
    return (
        <div className="flex flex-col space-y-20 px-4">
            <header>
                <h1 className="text-6xl font-bold">Art</h1>
                <p>This page is for my recent art, hope you enjoy it!</p>
            </header>

            <div className="columns-4 gap-4 space-y-4">
                <Image
                    src="/art/1.jpg"
                    alt="1"
                    width={500}
                    height={500}
                    className="w-full h-96 aspect-auto rounded-lg bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                />
                <Image
                    src="/art/2.jpg"
                    alt="2"
                    width={500}
                    height={500}
                    className="w-full h-60 aspect-auto rounded-lg bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                />
                <Image
                    src="/art/3.jpg"
                    alt="3"
                    width={500}
                    height={500}
                    className="w-full h-80 aspect-auto rounded-lg bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                />
                <Image
                    src="/art/4.jpg"
                    alt="4"
                    width={500}
                    height={500}
                    className="w-full h-52 aspect-auto rounded-lg bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                />
                <Image
                    src="/art/5.jpg"
                    alt="5"
                    width={500}
                    height={500}
                    className="w-full h-96 aspect-auto rounded-lg bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                />
                <Image
                    src="/art/6.jpg"
                    alt="6"
                    width={500}
                    height={500}
                    className="w-full h-32 aspect-auto rounded-lg bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                />
                <Image
                    src="/art/7.jpg"
                    alt="7"
                    width={500}
                    height={500}
                    className="w-full h-96 aspect-auto rounded-lg bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                />
            </div>
        </div>
    );
}
