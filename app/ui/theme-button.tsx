"use client";

import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ThemeButton() {
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        const tema = localStorage.getItem("tema");
        if (tema === "dark") {
            setTheme(true);
        }
    }, []);

    useEffect(() => {
        if (theme) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("tema", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("tema", "light");
        }
    }, [theme]);

    return (
        <button
            onClick={() => setTheme(!theme)}
            className="transition-all ease-in-out duration-700 p-2 border-solid border-2 border-slate-700 dark:border-slate-100 rounded-full"
        >
            <FaMoon className="text-xl dark:block hidden" />
            <FaSun className="text-xl dark:hidden block" />
        </button>
    );
}
