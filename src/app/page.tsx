import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import HorizontalScrollPortfolio from '@/components/HorizontalScrollPortfolio';
import ScrollShowcase from '@/components/ScrollShowcase';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <ScrollShowcase />
      <Stats />
      <Services />
      <Process />
      <TechStack />
      <HorizontalScrollPortfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
