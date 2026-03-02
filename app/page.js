import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden w-full max-w-[100vw]">
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  );
}
