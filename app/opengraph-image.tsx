import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";

export const alt = "Ahmd Alfazh";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div className="flex items-center h-screen flex-col justify-center gap-12 border-solid border-b-2 border-b-slate700 dark:border-b-slate300 relative">
                <header className="flex flex-col transition-all ease-in-out duration-700 absolute left-0">
                    <div>
                        <h1 className="lg:text-7xl md:text-6xl sm:text-4xl text-4xl font-bold gap-4">
                            Ahmd Alfazh <br />
                            Front-end Developer
                        </h1>
                    </div>
                    <p className="md:text-base text-xs pt-4">
                        Build a website with NextJs and TailwindCSS. I&apos;m a
                        student at State University of Surabaya.
                    </p>
                </header>
            </div>
        ),
        {
            ...size,
        }
    );
}
