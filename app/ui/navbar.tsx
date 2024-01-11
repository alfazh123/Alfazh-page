import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/Project",
    label: "Project",
  },
];

export default function Navbar() {
  return (
    <div className="fixed w-full backdrop-blur-md">
      <ul className="flex px-16 py-5">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href}>
              <p className="hover:bg-slate-200 hover:text-slate-800 px-3 py-1 rounded-full">
                {label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
