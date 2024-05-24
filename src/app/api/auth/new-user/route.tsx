import { auth, currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const userId = auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const user = await currentUser(); // Await the currentUser() function
  if (!user) {
    return new NextResponse("User not exist", { status: 404 });
  }

  let dbUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (!dbUser) {
    dbUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        name: user.fullName || "", // Provide a default value for the name property
      },
    });
  }

  if (!dbUser) {
    return new NextResponse(null, {
      status: 302,
      headers: {
        Location: `${process.env.NEXT_PUBLIC_URL}/api/auth/new-user`,
      },
    });
  }

  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: `${process.env.NEXT_PUBLIC_URL}/dashboard/projects`,
    },
  });
};
