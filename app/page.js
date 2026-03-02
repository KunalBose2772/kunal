import Hero from "../components/Hero";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Work />
      <Contact />
    </main>
  );
}
