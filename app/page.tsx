import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Projects />
      <About />
      <Services />
      <Footer />
    </main>
  );
}
