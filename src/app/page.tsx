import { HydrateClient } from "~/trpc/server";
import Card from "./components/Card";

export default async function Home() {
  return (
    <HydrateClient>
      <main className={styles.container}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Nate McGrady</h1>
          <div className={styles.linkGrid}>
            <Card title="X Profile" href="https://x.com/natemcgrady" />
            <Card title="X Chat" href="https://x.com/natemcgrady/chat" />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}

const styles = {
  container: `flex min-h-screen flex-col items-center justify-center bg-black text-white`,
  contentWrapper: `container flex flex-col items-center justify-center gap-12 px-4 py-16`,
  title: `text-5xl font-extrabold tracking-tight sm:text-[5rem]`,
  linkGrid: `grid grid-cols-1 gap-4 md:gap-8`,
};
