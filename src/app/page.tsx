import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TechStack from '@/components/TechStack';
import Portfolio from '@/components/Portfolio';
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
      <Stats />
      <Services />
      <Process />
      <TechStack />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md"
      >
        Aller au contenu principal
      </a>
    </main>
  );
}
