import "../styles/App.css";
import ContactUs from "./ContactUs";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Services from "./Services";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Vision_Mission from "./Vision_Mission";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <Hero />
        <Vision_Mission />
        <Services />
        <Testimonials />
        <Partners />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
