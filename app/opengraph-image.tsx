import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ahmd Mufahras Li Alfazh Assardew";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: 24,
                    background: "black",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                }}
            >
                A
            </div>
        ),
        {
            ...size,
        }
    );
}
