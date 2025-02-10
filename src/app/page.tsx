import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import Card from "./components/Card";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Testing T3 Stack</h1>
          <div className={styles.linkGrid}>
            <Card title="Profile" href="https://x.com/natemcgrady" />
            <Card title="Chat" href="https://x.com/natemcgrady/chat" />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}

const styles = {
  container: `flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white`,
  contentWrapper: `container flex flex-col items-center justify-center gap-12 px-4 py-16`,
  title: `text-5xl font-extrabold tracking-tight sm:text-[5rem]`,
  linkGrid: `grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8`,
};
