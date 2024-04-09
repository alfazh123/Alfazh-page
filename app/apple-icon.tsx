import { ImageResponse } from "next/og";
import React from "react";
import Image from "next/image";

export const runtime = "edge";

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = "image/x-icon";

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div>
                <Image src="/favicon.ico" alt="icon" {...size} />
            </div>
        ),
        {
            ...size,
        }
    );
}
