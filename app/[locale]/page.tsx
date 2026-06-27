import About from '@/app/components/About';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import Projects from '@/app/components/Projects';
import Services from '@/app/components/Services';
import { getProjectData, getTimelineData } from '@/constants';

export default function Home({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <main className="w-full">
      <Hero />
      <Projects data={getProjectData(locale)} />
      <About timelineData={getTimelineData(locale)} />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}
