import { Button } from "@/components/ui/button";
import { caller } from "@/trpc/server";

export default async function Page() {
  const users = await caller.getUsers();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      {JSON.stringify(users)}
    </div>
  );
}
