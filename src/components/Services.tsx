import { useEffect } from "react";
import AOS from "aos";

interface ServiceCategory {
  title: string;
  services: string[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Organizational support",
    services: [
      "Establishment and Licensing support",
      "Organizational policy development",
      "Organizational manual development",
    ],
  },
  {
    title: "Program based support",
    services: [
      "Project design to implementation",
      "MEL planning",
      "Portfolio Architect",
    ],
  },
  {
    title: "Human Resource support",
    services: [
      "Volunteer mobilization",
      "Access to potential interns",
      "Headhunting",
    ],
  },
  {
    title: "Standardization",
    services: ["SDG alignment"],
  },
  {
    title: "Grant Management",
    services: ["Grant Management support"],
  },
];

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="services"
      className="bg-gray-50 py-12 min-h-screen pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-green-950">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive support to enhance your organizational capabilities.
          </p>
        </div>
        <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              data-aos="fade-right"
            >
              <h3 className="text-2xl font-semibold text-black mb-6 text-start">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li
                    key={serviceIndex}
                    className="text-gray-700 flex items-start justify-start"
                  >
                    <span className="mr-2 text-green-900 text-sm font-bold">
                      *
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
