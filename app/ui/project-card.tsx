import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  src: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  src,
  link,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col bg-slate-200 text-slate-800 w-full rounded-lg">
      <Link href={link}>
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="w-full"
        />
        <h3 className="text-lg font-bold my-3 mx-1">{title}</h3>
      </Link>
    </div>
  );
}
