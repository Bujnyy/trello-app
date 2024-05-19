import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-48">
      <div className="w-full grid gap-8 grid-cols-[repeat(1,_minmax(15rem,_1fr))] auto-rows-[minmax(14rem,_1fr)] rounded-md md:grid-cols-[repeat(3,_minmax(15rem,_1fr))]">
        <Dialog>
          <DialogTrigger asChild>
            <div className="rounded-lg border bg-card flex items-center justify-center hover:bg-accent hover:text-accent-foreground cursor-pointer">
              Create a project
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create a project</DialogTitle>
              <DialogDescription>
                Create your trello board project here. Click "create" when
                you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Create project</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
