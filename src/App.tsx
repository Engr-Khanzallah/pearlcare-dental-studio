import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import Hero from "./components/sections/Hero";
import IntroEditorial from "./components/sections/IntroEditorial";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import WhyPearlCare from "./components/sections/WhyPearlCare";
import SmileTransformation from "./components/sections/SmileTransformation";
import ExperienceSection from "./components/sections/ExperienceSection";
import SmarterTechnology from "./components/sections/SmarterTechnology";
import PatientJourney from "./components/sections/PatientJourney";
import Team from "./components/sections/Team";
import Reviews from "./components/sections/Reviews";
import AppointmentSection from "./components/sections/AppointmentSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import FinalCTA from "./components/sections/FinalCTA";
import AIAssistant from "./components/ai-assistant/AIAssistant";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <IntroEditorial />
        <About />
        <Services />
        <WhyPearlCare />
        <SmileTransformation />
        <ExperienceSection />
        <SmarterTechnology />
        <PatientJourney />
        <Team />
        <Reviews />
        <AppointmentSection />
        <FAQSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />

      {/* Floating elements — always available across the site */}
      <WhatsAppButton />
      <AIAssistant />
    </div>
  );
}
