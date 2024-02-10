import type { Metadata } from "next";
import { Inter, Source_Code_Pro, Maven_Pro, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
    title: {
        template: " %s | Alfazh",
        default: "Alfazh",
    },
    keywords: "Alfazh, Mufahras, Portfolio, Web, Developer",
    description: "A Portfolio Website by Alfazh",
    authors: [{ name: "Ahmd Mufahras Li Alfazh Assardew" }],
    metadataBase: new URL("https://alfazh.vercel.app"),
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="relative lg:max-w-[1600px] mx-auto">
            <body className={mavenPro.className}>
                <Navbar />
                <main className="pt-32 pb-20 mx-auto lg:w-3/4 md:w-5/6 w-11/12 justify-center items-center">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
