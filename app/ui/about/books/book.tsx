import { useState } from "react";

import Image from "next/image";

interface BookProps {
    id: string;
    title: string;
    author?: string[];
    description: string;
    publishedYear: number;
    src: string;
    href: string;
    year: number;
}

export default function Book({
    id,
    title,
    author,
    description,
    publishedYear,
    src,
    href,
    year,
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
                className="dark:bg-slate-600 bg-slate-300 md:rounded-lg rounded-xl md:h-80 h-full w-full"
                onClick={openModal}
            >
                <Image
                    src={src}
                    alt={title}
                    width={500}
                    height={500}
                    className={`w-full aspect-auto rounded-md dark:bg-slate-700 h-full object-cover object-left md:block hidden`}
                />
                <div className="md:hidden block my-5">
                    <Image
                        src={src}
                        alt={title}
                        width={500}
                        height={500}
                        className={`mx-auto rounded-md sm:w-60 w-32`}
                    />
                    <p>
                        {title},{year}
                    </p>
                </div>
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
                        className="bg-slate-300 z-30 rounded-lg sm:w-5/6 w-full sm:m-0 mx-4 sm:p-10 p-4 md:grid md:grid-cols-2 md:gap-5 snap-y overflow-scroll h-5/6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={title}
                            width={500}
                            height={500}
                            className="w-96 aspect-auto rounded-md h-full  bg-slate-700 "
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
