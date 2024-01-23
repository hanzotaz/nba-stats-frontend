import Link from "next/link";
import NavLinks from "./nav-link";

export default function TopNav() {
  return (
    <div className="flex items-center px-3 py-4 md:px-2 bg-blue-500 text-white">
      <Link href="/" className="text-2xl mr-5 ml-2">
        NBA_stats
      </Link>
      <NavLinks />
    </div>
  );
}

