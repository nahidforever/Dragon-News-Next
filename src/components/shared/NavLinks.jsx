"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ href, className, children }) => {
  const pathName = usePathname();

  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className={`${isActive ? "border-b-2 border-b-purple-500 text-purple-500" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
