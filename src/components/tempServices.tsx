import { useEffect } from "react";
import AOS from "aos";
import {
  // faBuilding,
  // faClipboardList,
  // faUsers,
  // faGlobe,
  // faHandsHelping,
  faChartLine,
  faProjectDiagram,
  faUserTie,
  faBalanceScale,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Interface representing a service category with title and services array.
 */
interface ServiceCategory {
  title: string; // The title of the service category.
  services: string[]; // Array of services offered within the category.
  icon: IconDefinition;
}

/**
 * Array of service category objects containing title and services offered.
 */
const serviceCategories: ServiceCategory[] = [
  {
    title: "Organizational support",
    services: [
      "Establishment and Licensing support",
      "Organizational policy development",
      "Organizational manual development",
    ],
    // icon: faBuilding,
    icon: faChartLine,
  },
  {
    title: "Program based support",
    services: [
      "Project design to implementation",
      "MEL planning",
      "Portfolio Architect",
    ],
    // icon: faClipboardList,
    icon: faProjectDiagram,
  },
  {
    title: "Human Resource support",
    services: [
      "Volunteer mobilization",
      "Access to potential interns",
      "Headhunting",
    ],
    // icon: faUsers,
    icon: faUserTie,
  },
  {
    title: "Standardization",
    services: ["SDG alignment"],
    // icon: faGlobe,
    icon: faBalanceScale,
  },
  {
    title: "Grant Management",
    services: ["Grant Management support"],
    // icon: faHandsHelping,
    icon: faHandHoldingUsd,
  },
];

/**
 * Services component displaying categorized services with animations.
 * Uses AOS (Animate On Scroll) for animations.
 *
 * @component
 * @example
 * return (
 *   <Services />
 * )
 * @returns {JSX.Element} The rendered Services component
 */
const Services: React.FC = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);
  return (
    <div id="services" className="bg-gray-50 py-12 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-12">
          <h2 className="uppercase text-3xl text-harPrimary">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive support to enhance your organizational capabilities.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {serviceCategories.map((category, index) => (
            <div data-aos="fade-right">
              <div
                key={index}
                // className="bg-white p-8 rounded-lg text-harPrimary transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-harPrimary hover:text-white shadow-2xl"
                className="bg-white p-8 rounded-lg text-harPrimary transition duration-50 ease-in-out hover:-translate-y-1 hover:bg-gradient-to-r from-[#364117] to-[#899b22] hover:text-white shadow-2xl"
              >
                {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#364117] to-[#899b22] opacity-0 hover:opacity-100 transition-opacity duration-500"></div> */}
                {/* <FontAwesomeIcon icon={category.icon} /> */}
                <div className="font-normal text-center p-2 m-5 hover:text-white">
                  <FontAwesomeIcon icon={category.icon} size="3x" />
                </div>

                <h3 className="text-2xl font-semibold mb-6 text-center ">
                  {/* <span className="font-normal mr-5 hover:text-white">
                    <FontAwesomeIcon icon={category.icon} />
                  </span> */}
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li
                      key={serviceIndex}
                      className="flex items-start justify-start ml-4"
                    >
                      <svg
                        className="w-6 h-6 mr-2 text-harSecondary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="3"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm font-medium">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
