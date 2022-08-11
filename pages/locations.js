import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LocationGrid from "../components/LocationGrid";

export default function Locations() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Locations | Cosmos Odyssey</title>
        <meta
          name="description"
          content="Solar System Travel Deals - All locations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col gap-5 w-full max-w-7xl mx-auto p-4">
        <Header />

        <LocationGrid />

        <Footer />
      </main>
    </div>
  );
}
