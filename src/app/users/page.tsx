import { getUsers } from "@/services/users";
import { UsersTable } from "./users-table";

export default async function Users() {
  const data = await getUsers();

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-6xl flex-col items-center justify-between py-20 sm:py-32 px-4 sm:px-16 bg-white dark:bg-black">
        <UsersTable data={data} />
      </main>
    </div>
  );
}
