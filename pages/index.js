import Head from "next/head";
import BaseLayout from "../components/layouts/base";

export default function Home() {
  return (
    <BaseLayout>
      <div className="container">
        <Head>
          <title>Movie Time</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="h-full flex">
          <h2 className="text-2xl text-white">Hai</h2>
        </main>
      </div>
    </BaseLayout>
  );
}
