import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

type Props = {
  user?: null | User;
};

const Navigation = ({ user }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 py-4 px-48 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Link href={"/"}>
          <span className="text-xl font-bold">Trello-app.</span>
        </Link>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-8">
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Documentation</Link>
          <Link href={"#"}>Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-4 items-center">
        <SignedOut>
          <Link href={"/sign-in"}>
            <Button>Sign in</Button>
          </Link>
          <Link href={"/sign-up"}>
            <Button variant={"outline"}>Sign up</Button>
          </Link>
        </SignedOut>
        <SignedIn>
          <Link href={"/dashboard"}>
            <Button>Dashboard</Button>
          </Link>
          <UserButton />
        </SignedIn>
      </aside>
    </div>
  );
};

export default Navigation;
