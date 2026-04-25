import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSideBar = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 space-y-3">
        <h2 className="font-bold text-lg">Login with</h2>
        <button className="btn border-blue-500 text-blue-500">
          <FaGoogle /> Log in with Google
        </button>
        <button className="btn  border-gray-500 text-black">
          <FaGithub /> Log in with Github
        </button>
      </div>
    </div>
  );
};

export default RightSideBar;
