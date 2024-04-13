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
            <div tw="text-4xl font-bold text-center flex items-center justify-center w-full h-full bg-white">
                Ahmd Alfazh
            </div>
        ),
        // ImageResponse options
        {
            // For convenience, we can re-use the exported opengraph-image
            // size config to also set the ImageResponse's width and height.
            ...size,
        }
    );
}
