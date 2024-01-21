import { useState } from "react";

import Image from "next/image";

interface BookProps {
    id: number;
    title: string;
    author?: string[];
    description: string;
    publishedYear: number;
    src: string;
    href: string;
}

export default function Book({
    id,
    title,
    author,
    description,
    publishedYear,
    src,
    href,
}: BookProps) {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = (event: any) => {
        setIsOpen(false);
        if (event.target.getAttribute("data-dialog-backdrop")) {
            setIsOpen(false);
        }
    };

    const openModal = () => {
        setIsOpen(true);
    };

    return (
        <div>
            <button
                type="button"
                data-ripple-light="true"
                data-dialog-target={`"${id}"`}
                className="bg-slate-600 rounded-lg h-80 w-full"
                onClick={openModal}
            >
                <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className="w-full aspect-auto rounded-md bg-slate-700 h-full"
                />
            </button>

            {isOpen && (
                <div
                    className="items-center z-20 bg-slate-800 bg-opacity-50 backdrop-blur-sm text-slate-800 "
                    data-dialog-backdrop="true"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={closeModal}
                >
                    <div
                        className="bg-slate-300 z-30 rounded-lg sm:w-5/6 w-full sm:m-0 mx-4 sm:p-10 p-4 md:grid md:grid-cols-2 md:gap-5"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={title}
                            width={500}
                            height={500}
                            className="w-full aspect-auto rounded-md md:h-full h-80 bg-slate-700 "
                        />
                        <div className="space-y-2">
                            <div>
                                <h2 className="md:text-2xl text-lg font-bold">
                                    {title}
                                </h2>
                                <p className="md:text-sm text-xs font-semibold">
                                    {publishedYear}
                                </p>
                                {author?.map((author, index) => (
                                    <p
                                        key={index}
                                        className="md:text-sm text-xs font-semibold"
                                    >
                                        {author}
                                    </p>
                                ))}
                            </div>
                            <p className="text-justify md:text-base sm:text-sm text-xs">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
