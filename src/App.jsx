import Hero from './components/Hero';
import CafeShowcase from './components/CafeShowcase';
import Features from './components/Features';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased">
      <Hero />
      <CafeShowcase />
      <Features />
      <Process />
      <SocialProof />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
