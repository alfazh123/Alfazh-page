"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

interface SideBarProps {
    tags: string[];
}

export default function SideBar(SideBarProps: SideBarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const tag = searchParams.get("tag");
    console.log(tag);
    return (
        <div className="block">
            <div className="sticky top-20 sm:w-60">
                <div className="border-solid border dark:border-slate-200 border-[#381E70] dark:border-slate200 p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-semibold mb-4">Tags</h2>
                    <div className="flex gap-2 sm:flex-wrap snap-x snap-mandatory overflow-x-auto">
                        {SideBarProps.tags.map((tag, index) => (
                            <button
                                type="button"
                                onClick={() => {
                                    tag === "All"
                                        ? router.push(pathname)
                                        : router.push(pathname + "?tag=" + tag);
                                }}
                                key={index}
                                className="px-2 py-1 border-solid border dark:border-slate200 border-slate-800 rounded-md dark:hover:bg-slate200 dark:hover:text-slate800 hover:bg-slate700 hover:text-slate200 shrink-0 snap-end"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
