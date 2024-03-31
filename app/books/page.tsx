import BooksPanel from "@/app/ui/about/books/books";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Books",
};

export default function Books() {
    return (
        <div className="px-4">
            <h1>Books</h1>
            <BooksPanel />
        </div>
    );
}
