"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "home", href: "/" },
  { name: "games", href: "/stats/games" },
  { name: "teams", href: "/stats/teams" },
  { name: "players", href: "/stats/players" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex space-x-4">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx("text-white hover:text-gray-300 hover:transform hover:scale-110", {
            "text-gray-300": pathname === link.href,
          })}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

