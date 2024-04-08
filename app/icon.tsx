import { ImageResponse } from "next/og";

export function generateImageMetadata() {
    return [
        {
            contentType: "image/png",
            size: { width: 48, height: 48 },
            id: "small",
        },
        {
            contentType: "image/png",
            size: { width: 96, height: 96 },
            id: "medium",
        },
    ];
}
