import { ImageResponse } from "next/og";
import React from "react";
import { Open_Sans } from "next/font/google";

export const runtime = "edge";

export const alt = "Ahmd Alfazh";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export const type = "website";

const openSans = Open_Sans({ subsets: ["latin"] });

export default async function Image() {
    return new ImageResponse(
        (
            <div className="flex items-center bg-sand h-full w-full flex-col justify-center gap-12 border-solid border-b-4 border-b-slate700">
                <header className="flex flex-col transition-all ease-in-out duration-700 absolute left-0">
                    <div>
                        <h1 className="text-7xl text-slate700 font-bold gap-4">
                            Ahmd Alfazh
                        </h1>
                    </div>
                    <p className="text-base pt-4">
                        Front-end Developer from Surabaya, Indonesia.
                    </p>
                </header>
            </div>
        ),
        {
            ...size,
            fonts: [
                {
                    name: "Open Sans",
                    data: Buffer.from(openSans.className),
                    style: "normal",
                    weight: 400,
                },
            ],
        }
    );
}
