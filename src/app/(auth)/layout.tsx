import Navigation from "@/components/site/navigation";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navigation />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%]">
        {children}
      </div>
    </>
  );
};

export default layout;
