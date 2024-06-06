import "../styles/App.css";
import ContactUs from "./ContactUs";
import Partners from "./Partners";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen w-full border-2">
      <div className="flex-grow w-full">
        <Partners />
        <Testimonials />
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default App;
