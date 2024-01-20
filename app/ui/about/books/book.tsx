import Image from "next/image";

interface BookProps {
    title: string;
    description: string;
    src: string;
    href: string;
    tag?: string[];
}

export default function Book({
    title,
    src,
    description,
    href,
    tag,
}: BookProps) {
    return (
        <div className="bg-slate-600 rounded-lg h-80">
            <Image
                src={src}
                alt={title}
                width={500}
                height={500}
                className="w-full aspect-auto rounded-md bg-slate-700 h-full"
            />
        </div>
    );
}
