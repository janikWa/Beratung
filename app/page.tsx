import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Competencies from "@/components/sections/Competencies";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import FullService from "@/components/sections/FullService";
import ContactCta from "@/components/sections/ContactCta";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <Competencies />
        <Process />
        <About />
        <FullService />
        <ContactCta />
      </main>
      <Footer />
    </>
  );
}
