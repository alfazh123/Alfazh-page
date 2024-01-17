import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function GuestBook() {
    const session = await getServerSession(options);

    if (!session) {
        redirect("/api/auth/signin?callbackUrl=/guest-book");
    }
    return (
        <div>
            <h1>Guest Book</h1>
            <Link href="/api/auth/signin">Login</Link>
            <Link href="/api/auth/signout">Logout</Link>
        </div>
    );
}
