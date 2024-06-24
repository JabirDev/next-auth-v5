import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <div className="w-full flex py-10 px-14 gap-4 items-center justify-between">
      <h1 className="text-lg font-bold">Next Auth v5</h1>
      <aside className="flex flex-row-reverse gap-4">
        <Link href="/signin" className={buttonVariants({ variant: "default" })}>
          Sign In
        </Link>
        <Link
          href="/signout"
          className={buttonVariants({ variant: "destructive" })}
        >
          Sign Out
        </Link>
        <Link href="/protected" className={buttonVariants({ variant: "link" })}>
          Protected
        </Link>
        <Link href="/" className={buttonVariants({ variant: "link" })}>
          Home
        </Link>
      </aside>
    </div>
  );
};

export default Navbar;
