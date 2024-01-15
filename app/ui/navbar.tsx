import Link from "next/link";
import {
    FaGithub,
    FaHome,
    FaHammer,
    FaQuestion,
    FaPaintRoller,
} from "react-icons/fa";

const links = [
    {
        href: "/",
        label: "Home",
        icon: <FaHome className="text-2xl" />,
    },
    {
        href: "/project",
        label: "Project",
        icon: <FaHammer className="text-2xl" />,
    },
    {
        href: "/about",
        label: "About",
        icon: <FaQuestion className="text-2xl" />,
    },
    {
        href: "/art",
        label: "Art",
        icon: <FaPaintRoller className="text-2xl" />,
    },
];

export default function Navbar() {
    return (
        <div className="fixed flex justify-between w-full backdrop-blur-md">
            <ul className="md:px-16 flex px-4 py-5">
                {links.map(({ href, label, icon }) => (
                    <li key={`${href}${label}`}>
                        <Link href={href}>
                            <p className="hover:underline px-3 sm:flex hidden">
                                {label}
                            </p>
                            <p className="hover:underline px-3 sm:hidden flex">
                                {icon}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex md:px-16 px-4 py-5">
                <a href="https://github.com/alfazh123">
                    <FaGithub className="text-3xl" />
                </a>
            </div>
        </div>
    );
}
