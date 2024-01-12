import Link from "next/link";
import { FaGithub } from "react-icons/fa";

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

export default function Navbar() {
  return (
    <div className="fixed flex justify-between w-full backdrop-blur-md">
      <ul className="flex px-16 py-5">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>
              <p className="hover:underline px-3">{label}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-end px-16 py-5">
        <a href="https://github.com/alfazh123">
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
  );
}
