import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "About Acme";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    // Font

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                tw={`bg-[#DFD8BC] text-center flex flex-col justify-center border-solid border-4 border border-slate-600 pl-32 w-full h-full`}
            >
                <h1 tw="text-6xl font-bold">Ahmd Alfazh</h1>
                <p tw="text-xl">Portofolio Website by Alfazh</p>
            </div>
        ),
        {
            ...size,
        }
    );
}
