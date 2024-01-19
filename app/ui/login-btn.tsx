"use client";

import { signIn } from "next-auth/react";

export default function LoginBtn() {
    return (
        <button
            onClick={() =>
                signIn("github", {
                    callbackUrl: "http://localhost:3000/guest-book",
                })
            }
        >
            Login
        </button>
    );
}
