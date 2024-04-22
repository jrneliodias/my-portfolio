import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <main className="w-screen max-w-screen">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
