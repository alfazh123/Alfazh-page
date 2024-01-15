import Link from "next/link";
import {
    FaGithub,
    FaHome,
    FaInstagram,
    FaLinkedin,
    FaLink,
} from "react-icons/fa";

interface FooterProps {
    title: string;
    link: string;
}

const links = [
    {
        href: "https://www.linkedin.com/in/ahmd-mufahras-li-alfazh-assardew-031a08255/",
        label: "Ahmd Mufahras Li Alfazh Assardew",
        icon: <FaLinkedin className="text-xl" />,
    },
    {
        href: "https://www.instagram.com/ahmd_alfazh/",
        label: "ahmd_afazh",
        icon: <FaInstagram className="text-xl" />,
    },
    // {
    //   href: "https://github.com/alfazh123",
    //   label: "Code",
    //   icon: <FaLink className="text-xl" />,
    // },
];

export default function Footer() {
    return (
        <div className="flex md:flex-row flex-col md:px-20 px-4 py-10 md:justify-between justify-center items-center">
            <h1 className="font-bold text-3xl flex md:mb-0 mb-5">.Alfazh</h1>
            <div className="items-center flex md:flex-row flex-col">
                <p>Let's Get In Touch 👍 </p>
                <ul className="justify-between flex">
                    {links.map(({ href, label, icon }) => (
                        <li key={`${href}${label}`}>
                            <Link href={href} className="flex">
                                <p className="pl-3 py-1 rounded-full hover:underline">
                                    {icon}
                                </p>
                                {/* <p className="pl-2 py-1 rounded-full hover:underline">
                  {label}
                </p> */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
