import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ahmd Mufahras Li Alfazh Assardew";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    const interSemiBold = await fetch(
        "https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap"
    ).then((res) => res.text());

    return (
        <html lang="en">
            <head>
                <style>{interSemiBold}</style>
            </head>
            <body className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-inter">
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <h1 className="text-4xl font-bold">Ahmd Alfazh</h1>
                    <p className="text-lg">Front-end Developer</p>
                </div>
            </body>
        </html>
    );
}
