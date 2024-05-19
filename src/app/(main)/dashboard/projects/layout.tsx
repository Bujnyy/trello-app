import ProjectsNavigation from "@/components/projects/navigation";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProjectsNavigation />
        {children}
      </body>
    </html>
  );
}
