"use client";

import Book from "@/app/ui/about/books/book";
import { useState } from "react";
import db from "@/app/lib/db.json";

export default function Books() {
    const [active, setActive] = useState(0);
    return (
        <div>
            <h1>Books</h1>
            <ul className="goup flex gap-2">
                {db.books.map((book, index) => (
                    <li
                        key={book.id}
                        onClick={() => setActive(index)}
                        className={`relative cursor-pointer w-[8%] ${
                            active === index ? "w-[35%]" : ""
                        } 
                        md:[transition:width_var(--transition,200ms_ease-in)] hover:w-[20%]
                        `}
                    >
                        <Book
                            title={book.title}
                            author={book.author}
                            publishedYear={book.year}
                            description={book.description}
                            src={book.image_url}
                            href={book.link}
                            id={book.id}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
