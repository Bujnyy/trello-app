import { User } from "@clerk/nextjs/server";
import React from "react";

type Props = {
  user?: null | User;
};

const index = ({ user }: Props) => {
  return <div>index</div>;
};

export default index;
