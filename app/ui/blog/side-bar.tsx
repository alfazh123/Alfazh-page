interface SideBarProps {
    tags: {
        tag: string[];
        link: string[];
    };
}

export default function SideBar(SideBarProps: SideBarProps) {
    return (
        <div className="block">
            <div className="sticky top-20 sm:w-60">
                <div className="border-solid border-2 dark:border-slate-200 border-[#381E70] p-4 rounded-lg mb-4">
                    <h2 className="text-xl font-semibold">Tags</h2>
                    <div className="flex gap-2 sm:flex-wrap snap-x snap-mandatory overflow-x-auto">
                        {SideBarProps.tags.tag.map((tag, index) => (
                            <p
                                key={index}
                                className="px-2 py-1 border-solid border-2 dark:border-slate-200 border-slate-800 rounded-full dark:hover:bg-slate-200 dark:hover:text-slate-800 hover:bg-[#381E70] hover:text-white shrink-0 snap-end"
                            >
                                <a href={SideBarProps.tags.link[index]}>
                                    {tag}
                                </a>
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
