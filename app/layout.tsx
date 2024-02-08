import type { Metadata } from "next";
import { Inter, Source_Code_Pro, Maven_Pro, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "./ui/navbar";
import Footer from "./ui/footer";

const inter = Inter({ subsets: ["latin"] });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400"] });

// export const metadata: Metadata = {
//     title: "Alfazh",
//     description: "Generated by create next app",
// };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="relative dark lg:max-w-[1600px] mx-auto">
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
