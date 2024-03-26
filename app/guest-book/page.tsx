import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import LogoutBtn from "../ui/logout-btn";
import LoginBtn from "../ui/login-btn";
import { useSession } from "next-auth/react";

export default async function GuestBook() {
    const session = await getServerSession(options);
    // const { data: session } = useSession();

    function sessionUser() {
        if (session) {
            return <LogoutBtn />;
        } else {
            return <LoginBtn />;
        }
    }
    return (
        <div>
            <h1>Guest Book</h1>
            {sessionUser()}
            <div className={`${session ? "block" : "hidden"}`}>
                <h2>Hi, {session?.user?.name}</h2>
            </div>
        </div>
    );
}
