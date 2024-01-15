import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  src: string;
  href: string;
  tag?: string[];
}

export default function ProjectCard({
  title,
  src,
  description,
  href,
  tag,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-slate-800 shadow-2xl transition ease-in-out delay-150 border-solid border-2 hover:scale-105 border-slate-600 hover:border-slate-400 duration-300 w-full rounded-lg">
      <Link href={href} className="m-2">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="w-full aspect-auto rounded-md "
        />
        <div className="items-center mx-4">
          <h3 className="text-lg font-bold my-3 mx-1">{title}</h3>
          <div className="justify-between mb-4">
            {tag?.map((tag) => (
              <p
                key={tag}
                className="border-solid border-2 font-semibold border-slate-200 px-2 py-1 rounded-md text-sm inline-block mx-1"
              >
                {tag}
              </p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export function ProjectCardSkeleton() {
  return (
    <div className="flex flex-col bg-slate-800 text-slate-200 shadow-2xl transition ease-in-out delay-150 hover:border-solid hover:border-2 hover:scale-105 hover:border-slate-200 duration-300 w-full rounded-lg">
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
  );
}

export function CardProject({
  title,
  description,
  src,
  href,
  tag,
}: ProjectCardProps) {
  return (
    <div>
      <div className="flex bg-slate-800 shadow-2xl transition ease-in-out border-solid border-2 border-slate-600 hover:border-slate-400 duration-300 w-full rounded-lg">
        <Link href={href} className="m-2 flex md:flex-row flex-col">
          <Image
            src={src}
            alt={title}
            width={500}
            height={500}
            className="md:w-80 w-full aspect-auto rounded-md "
          />
          <div className="items-center mx-4">
            <h3 className="text-lg font-bold my-3 mx-1">{title}</h3>
            <p className="text-gray-500">{description}</p>
            <div className="justify-between mb-4">
              {tag?.map((tag, index) => (
                <div
                  key={tag}
                  className="border-solid border-2 font-semibold border-slate-200 px-2 py-1 rounded-md text-sm inline-block mx-1"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
