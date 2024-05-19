import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

type Props = {
  user?: null | User;
};

const ProjectsNavigation = ({ user }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 py-4 px-48 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <span className="text-xl font-bold">Trello-app.</span>
      </aside>

      <aside className="flex gap-4 items-center">
        <UserButton />
      </aside>
    </div>
  );
};

export default ProjectsNavigation;
