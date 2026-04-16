import './App.css';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import CompanyMarquee from './components/CompanyMarquee';
import WelcomeSection from './components/WelcomeSection';
import AboutSSVC from './components/AboutSSVC';
import ServicesSSVC from './components/ServicesSSVC';
import IndustriesSSVC from './components/IndustriesSSVC';
import TestimonialsSSVC from './components/TestimonialsSSVC';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Navbar />
      <HeroCarousel />
      <CompanyMarquee />
      <WelcomeSection />
      <AboutSSVC />
      <ServicesSSVC />
      <IndustriesSSVC />
      <TestimonialsSSVC />
      <Footer />
    </div>
  );
}

export default App;
