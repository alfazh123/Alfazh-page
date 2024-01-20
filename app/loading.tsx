import { ProjectCardSkeleton } from "./ui/project-card";
import { SkeletonCardLinkProject } from "./ui/skeletonCards";

export default function Loading() {
    return (
        <main className="flex flex-col mb-10 px-4">
            <div className="min-h-3/4 static flex justify-center bg-slate-600 p-5 rounded-lg mb-20">
                <div className="static bottom-0 left-0 rounded-lg min-h-96 w-full">
                    <div className="mt-32 py-3 lg:w-1/2 space-y-5">
                        <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                        <div className="text-xl text-justify">
                            <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                            <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                            <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                        </div>
                    </div>
                    <div>
                        <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                    </div>
                </div>
            </div>
            {/* 
            <div className="flex md:flex-row flex-col md:space-x-10 space-x-0"> */}
            <div className="space-y-2">
                <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    <SkeletonCardLinkProject />
                    <SkeletonCardLinkProject />
                </div>
            </div>

            <div className="flex flex-col space-y-4">
                <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-8 rounded-md"></div>
                <div className="justify-between mb-4">
                    <div className="bg-slate-700 animate-pulse h-6 rounded-md w-1/4"></div>
                </div>
            </div>
        </main>
    );
}
