import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Approach from "../components/Approach";
import Journey from "../components/Journey";
import Capabilities from "../components/Capabilities";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen relative overflow-x-hidden w-full max-w-[100vw]">
      <Hero />
      <About />
      <Work />
      <Approach />
      <Journey />
      <Capabilities />
      <Contact />
    </main>
  );
}
