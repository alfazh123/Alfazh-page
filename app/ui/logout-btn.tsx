"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";

export default function LogoutBtn() {
    return <button onClick={() => signOut()}>Logout</button>;
}
