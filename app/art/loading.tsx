import { SkeletonCardLinkArt } from "../ui/skeletonCards";

export default function Project() {
    return (
        <div className="min-h-screen flex flex-col space-y-20 px-4">
            <div className="text-lg font-bold my-3 mx-1 bg-slate-700 animate-pulse h-20 rounded-md mb-4"></div>
            <div className="columns-4">
                <SkeletonCardLinkArt height="h-32" />
                <SkeletonCardLinkArt height="h-96" />
                <SkeletonCardLinkArt height="h-40" />
                <SkeletonCardLinkArt height="h-80" />
            </div>
        </div>
    );
}
