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

const openSans = Open_Sans({ subsets: ["latin"] });

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 128,
                    background: "white",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div>
                    <div>
                        <h1>Ahmd Alfazh</h1>
                    </div>
                    <p>Front-end Developer from Surabaya, Indonesia.</p>
                </div>
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
