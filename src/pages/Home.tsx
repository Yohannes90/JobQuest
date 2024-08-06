import { lazy } from "react";

// Lazy load components for improved performance
const Hero = lazy(() => import("../components/landingpage_content/Hero"));
const AboutUs = lazy(() => import("../components/landingpage_content/Vision_Mission"));
const Services = lazy(() => import("../components/landingpage_content/Services"));
const Testimonials = lazy(() => import("../components/landingpage_content/Testimonials"));
const ContactUs = lazy(() => import("../components/landingpage_content/ContactUs"));
const Partners = lazy(() => import("../components/landingpage_content/Partners"));


const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs/>
      <Services />
      <Partners />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
