import "../styles/App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

/**
 * Main application component.
 * Renders the entire application structure including navigation, lazy-loaded routes,
 * and a footer.
 *
 * @returns JSX element representing the entire application layout.
 */
const App: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
