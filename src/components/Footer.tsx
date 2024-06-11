import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import companyLogo from "/icon.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-white py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-lg font-semibold mb-4 md:mb-0">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="h-8 w-8 mr-2"
            />
            <a href="/" className="text-green-950 hover:text-gray-900">
              Har Consultancy.
            </a>
          </div>
          <div className="space-x-6 mb-4 md:mb-0">
            <a href="/" className="text-green-950 hover:text-gray-400">
              Home
            </a>
            <a href="/about" className="text-green-950 hover:text-gray-400">
              About Us
            </a>
            <a href="/services" className="text-green-950 hover:text-gray-400">
              Services
            </a>
            <a
              href="/testimonials"
              className="text-green-950 hover:text-gray-400"
            >
              Testimonials
            </a>
            <a href="/contact" className="text-green-950 hover:text-gray-400">
              Contact
            </a>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-950 hover:text-gray-400"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
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
