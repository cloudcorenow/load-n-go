import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Flyer from './components/Flyer';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Flyer />
        <HowItWorks />
        <Services />
        <Gallery />
        <Location />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
