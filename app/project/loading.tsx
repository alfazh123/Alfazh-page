import { SkeletonCardLinkProject } from "@/app/components/skeletonCards";

export default function Project() {
    return (
        <div className="min-h-screen flex flex-col space-y-20 px-4">
            <div className="text-lg font-bold my-3 mx-1 dark:bg-slate-700 bg-slate-300 animate-pulse h-20 w-96 rounded-md mb-4"></div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5">
                <SkeletonCardLinkProject />
                <SkeletonCardLinkProject />
                <SkeletonCardLinkProject />
            </div>
        </div>
    );
}
