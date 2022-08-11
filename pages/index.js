import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Reserve from "../components/Reserve";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Cosmos Odyssey | Solar System Travel Deals</title>
        <meta name="description" content="Solar System Travel Deals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-5 w-full max-w-7xl mx-auto p-4">
        <Header />
        <Hero />
        <Reserve />

        <Banner />
        <Footer />
      </main>
    </div>
  );
}
