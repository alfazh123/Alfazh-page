"use client";

import Book from "@/app/ui/about/books/book";
import { useState } from "react";
import { books } from "./books";

export default function Books() {
    const [active, setActive] = useState(0);
    return (
        <div>
            <h1>Books</h1>
            <ul className="goup flex gap-2">
                {books.map((book, index) => (
                    <li
                        key={book.id}
                        onClick={() => setActive(index)}
                        className={`relative cursor-pointer w-[8%] ${
                            active === index ? "w-[35%]" : ""
                        }
                        md:[transition:width_var(--transition,200ms_ease-in)] ${
                            active === index ? "" : "hover:w-[20%]"
                        }`}
                    >
                        <Book
                            title={book.title}
                            description={book.description}
                            src={book.src}
                            href={book.link}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
