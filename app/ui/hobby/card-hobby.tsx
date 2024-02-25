import Image from "next/image";
import Link from "next/link";

interface HobbyProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function CardHobby({
    title,
    description,
    image,
    link,
}: HobbyProps) {
    return (
        <Link href={link}>
            <div className="flex relative sm:flex-row flex-col sm:items-center sm:justify-between p-2 border-solid border-2 rounded-md border-[#381E70] dark:border-[#EAF7DF] h-32 sm:h-full cursor-pointer">
                <section>
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <p className="italic">{description}</p>
                </section>
                <div className="sm:h-32 h-20 w-1/2 bottom-0 right-0 absolute sm:static">
                    <Image
                        src={image}
                        alt="Picture of the author"
                        width={250}
                        height={250}
                        className="sm:rounded-l-full rounded-tl-full h-full w-full object-cover"
                    />
                </div>
            </div>
        </Link>
    );
}
