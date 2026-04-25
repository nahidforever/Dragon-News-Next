import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-[80vh] flex justify-center items-center flex-col gap-5">
      <h2 className="text-5xl font-bold text-purple-500">
        This Page is not Found
      </h2>

      <Link href={"/"}>
        <button className="btn bg-purple-500 text-white rounded-lg">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
