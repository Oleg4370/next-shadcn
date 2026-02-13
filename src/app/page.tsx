import Image from "next/image";

const LinkWrapper = ({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) => (
  <a
    href={link}
    className="font-medium text-zinc-950 dark:text-zinc-50 hover:text-zinc-400 dark:hover:text-zinc-600"
  >
    {children}
  </a>
);

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mt-20">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            NextJS Basics
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Test website with some basic pages and forms built with{" "}
            <a
              href="https://nextjs.org/docs"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Next.js 14
            </a>{" "}
            and{" "}
            <a
              href="https://ui.shadcn.com/docs"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              shadcn/ui
            </a>
          </p>
          <div>
            <h2 className="text-xl font-semibold leading-10 tracking-tight">
              Available Pages:
            </h2>
            <ul className="list-disc pl-5 text-left">
              <li>
                <LinkWrapper link="/login">Login page</LinkWrapper>
              </li>
              <li>
                <LinkWrapper link="/password-reset">
                  Password Reset page
                </LinkWrapper>
              </li>
              <li>
                <LinkWrapper link="/register">Registration page</LinkWrapper>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
