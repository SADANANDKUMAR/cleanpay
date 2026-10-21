import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Sustainability from './components/Sustainability';
import Rewards from './components/Rewards';
import Business from './components/Business';
import AppIntegration from './components/AppIntegration';
import Impact from './components/Impact';
import WhyPilot from './components/WhyPilot';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <Sustainability />
      <Rewards />
      <Business />
      <AppIntegration />
      <Impact />
      <WhyPilot />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
