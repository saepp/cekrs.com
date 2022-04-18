import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-lg backdrop-saturate-150 bg-[rgba(255,255,255,.75)] border border-[rgba(209,213,219,.3)] dark:bg-[rgba(17,25,40,.75)] dark:border-[rgba(255,255,55,.125)]">
      <div className="flex justify-between mx-8 md:mx-40 my-4">
        <Link href="/">
          <a className="font-bold text-lg">cekrs.com</a>
        </Link>
        <div
          className={`bg-gray-600 flex items-center px-0.5 rounded-full h-6 w-12 cursor-pointer shrink-0 relative`}
        >
          <span className="absolute left-0">🌜</span>
          <span className="absolute right-0.5">🌞</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
