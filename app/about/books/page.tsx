"use client";

import Book from "@/app/ui/about/books/book";
import { useState } from "react";
import db from "@/app/lib/db.json";

export default function Books() {
    const [active, setActive] = useState(1);
    return (
        <div className="px-4">
            <h1>Books</h1>
            <ul className="flex relative md:flex-row flex-col gap-4">
                {db.books.map((book, id) => (
                    <li
                        key={book.id}
                        onClick={() => setActive(id)}
                        className={`md:relative cursor-pointer md:w-[8%] 
                        md:[transition:width_var(--transition,200ms_ease-in)] md:hover:w-[20%]
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
                            year={book.year}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}
