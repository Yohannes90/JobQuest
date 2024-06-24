import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import companyLogo from "/icon.png";

/**
 * Footer component
 *
 * This component renders the footer section of the website which includes:
 * - Company logo and name
 * - Navigation links to different sections of the website
 * - Social media icons with links to respective profiles
 * - Copyright information
 *
 * @component
 * @example
 * return (
 *   <Footer />
 * )
 * @returns {JSX.Element} The rendered Footer component
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-white pt-12 pb-5 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-lg font-semibold mb-4 md:mb-0">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-8 w-8 mr-2"
            />
            <a href="#" className="text-green-950 hover:text-harSecondary">
              Har Consultancy.
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-10">
            <a
              href="#"
              className="text-center text-green-950 hover:text-gray-400"
            >
              Home
            </a>
            <a
              href="#vision-mission"
              className="text-center text-green-950 hover:text-harSecondary"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-center text-green-950 hover:text-harSecondary"
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="text-center text-green-950 hover:text-harSecondary"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-center text-green-950 hover:text-harSecondary"
            >
              Contact
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://x.com/consult_Har"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/har-consultancy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
        <div className="mt-8 ml-4 pl-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Har Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
