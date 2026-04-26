import { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Services from './sections/Services';
import About from './sections/About';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <Header scrolled={scrollY > 40} />
      <main>
        <Hero />
        <Projects />
        <Services />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
