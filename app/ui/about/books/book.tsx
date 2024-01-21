import { useState } from "react";

import Image from "next/image";

interface BookProps {
    id: number;
    title: string;
    description: string;
    src: string;
    href: string;
    tag?: string[];
}

export default function Book({
    id,
    title,
    src,
    description,
    href,
    tag,
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
                        className="bg-slate-300 z-30 rounded-lg w-96 p-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={src}
                            alt={title}
                            width={500}
                            height={500}
                            className="w-full aspect-auto rounded-md  h-full"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
