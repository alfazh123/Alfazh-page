import Image from "next/image";
import { Metadata } from "next";

import { db } from "@/app/lib/db";

export const metadata: Metadata = {
    title: "Art",
};

export default function Art() {
    return (
        <div className="flex flex-col space-y-20 px-4 pt-32">
            <header>
                <h1 className="text-6xl font-bold">Art</h1>
                <p>This page is for my recent art, hope you enjoy it!</p>
            </header>

            <div className="md:columns-4 columns-2 gap-4 space-y-4">
                {db.art.map((art, id) => (
                    <Image
                        key={id}
                        src={art["image-url"]}
                        alt={art.title}
                        width={500}
                        height={500}
                        className="w-full h-full aspect-auto rounded-lg dark:bg-slate-500 break-inside-avoid hover:scale-105 transition ease-in-out duration-300"
                    />
                ))}
            </div>
        </div>
    );
}
