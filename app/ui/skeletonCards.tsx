interface skeletonArtProps {
    height: string;
}

export function SkeletonCardLinkArt({ height }: skeletonArtProps) {
    return (
        <div>
            <div className="flex flex-col bg-slate-800 shadow-2xl transition ease-in-out delay-150 border-solid border-2 hover:scale-105 border-slate-600 hover:border-slate-400 duration-300 w-full rounded-lg">
                <div className="m-2">
                    <div className="w-full aspect-auto rounded-md bg-slate-700 animate-pulse">
                        <div className={`${height} w-full rounded-md`} />
                    </div>
                    <div className="items-center mx-4">
                        <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md" />
                        <div className="justify-between mb-4">
                            <div className="bg-slate-700 animate-pulse h-6 rounded-md w-1/4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function SkeletonCardLinkProject() {
    return (
        <div>
            <div className="flex flex-col bg-slate-800 shadow-2xl transition ease-in-out delay-150 border-solid border-2 hover:scale-105 border-slate-600 hover:border-slate-400 duration-300 w-full rounded-lg">
                <div className="m-2">
                    <div className="w-full aspect-auto rounded-md bg-slate-700 animate-pulse">
                        <div className="h-96 w-full rounded-md" />
                    </div>
                    <div className="items-center mx-4">
                        <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md" />
                        <div className="justify-between mb-4">
                            <div className="bg-slate-700 animate-pulse h-6 rounded-md w-1/4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectCardSkeleton() {
    return (
        <div className="flex flex-col bg-slate-500 text-slate-200 shadow-2xl transition ease-in-out delay-150 hover:border-solid hover:border-2 hover:scale-105 hover:border-slate-200 duration-300 w-full rounded-lg">
            <div className="m-2 flex">
                <div className="w-80 aspect-auto rounded-md bg-slate-700 animate-pulse">
                    <div className="h-40 w-full rounded-md" />
                </div>
                <div className="items-center mx-4">
                    <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md" />
                    <div className="justify-between mb-4">
                        <div className="bg-slate-700 animate-pulse h-6 rounded-md w-1/4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
