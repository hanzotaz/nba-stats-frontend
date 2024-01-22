"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Teams", href: "/stats/teams" },
  { name: "Players", href: "/stats/players" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx("text-white hover:text-gray-300", {
            "text-gray-300": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

