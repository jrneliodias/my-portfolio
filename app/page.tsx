import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <About />
      <Hero />
      <Footer />
    </main>
  );
}
