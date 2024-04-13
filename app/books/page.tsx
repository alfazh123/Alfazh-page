import BooksPanel from "@/app/components/about/books/books";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Books",
};

export default function Books() {
    return (
        <div className="px-4 pt-32">
            <h1>Books</h1>
            <BooksPanel />
        </div>
    );
}
