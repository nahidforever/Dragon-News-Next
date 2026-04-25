import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "../../assets/user.png";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center max-w-7xl mx-auto mt-6">
      <div></div>
      <ul className="flex justify-between gap-4 text-gray-700">
        <li>
          <NavLinks href={"/"}>Home</NavLinks>
        </li>
        <li>
          <NavLinks href={"/about-us"}>About</NavLinks>
        </li>
        <li>
          <NavLinks href={"/career"} className="text-green-700">
            Career
          </NavLinks>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Image
          src={userAvatar}
          alt="user-avatar"
          width={60}
          height={60}
        ></Image>
        <button className="btn bg-purple-500 text-white rounded-lg">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
