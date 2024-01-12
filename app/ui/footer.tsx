import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface FooterProps {
  title: string;
  link: string;
}

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/project",
    label: "Project",
  },
];

export default function Footer() {
  return (
    <div className="flex justify-between px-20 py-10">
      <h1 className="font-bold text-xl">Alfazh</h1>
      <ul className="flex justify-between w-60">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>
              <p className="px-3 py-1 rounded-full hover:underline">{label}</p>
            </Link>
          </li>
        ))}
        <li className="px-3 py-1 rounded-full">
          <Link href="https://github.com/alfazh123">
            <FaGithub className="text-3xl" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
