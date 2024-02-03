export default function Project() {
    return (
        <div className="min-h-screen flex flex-col space-y-20 px-4">
            <div className="text-lg font-bold my-3 mx-1 dark:bg-slate-700 bg-slate-300 w-96 animate-pulse h-20 rounded-md mb-4"></div>
            <div className="text-lg font-bold my-3 mx-1 dark:bg-slate-700 bg-slate-300 w-full animate-pulse h-20 rounded-md mb-4">
                <div className="w-full aspect-auto rounded-md dark:bg-slate-700 bg-slate-400 animate-pulse">
                    <div className="h-40 w-full rounded-md" />
                </div>
                <div className="w-full h-8 dark:bg-slate-700 bg-slate-400 animate-pulse"></div>
                <div className="w-full h-8 dark:bg-slate-700 bg-slate-400 animate-pulse"></div>
                <div className="w-full h-8 dark:bg-slate-700 bg-slate-400 animate-pulse"></div>
                <div className="w-full h-8 dark:bg-slate-700 bg-slate-400 animate-pulse"></div>
                <div className="w-full h-8 dark:bg-slate-700 bg-slate-400 animate-pulse"></div>
            </div>
        </div>
    );
}
