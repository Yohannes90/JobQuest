import { useEffect } from "react";
import AOS from "aos";

interface Testimonial {
  name: string;
  position: string;
  image: string;
  testimonial: string;
  personLink: string;
  companyLink: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Dyree",
    position: "CEO, Company A",
    image: "https://via.placeholder.com/100",
    testimonial:
      "This company provided excellent service and support. Highly recommend!",
    personLink: "https://linkedin.com/in/johndyree",
    companyLink: "https://companyA.com",
  },
  {
    name: "Jane Smith",
    position: "CTO, Company B",
    image: "https://via.placeholder.com/100",
    testimonial:
      "Professional and efficient. Their solutions exceeded our expectations.",
    personLink: "https://linkedin.com/in/janesmith",
    companyLink: "https://companyB.com",
  },
  {
    name: "Alice Johnson",
    position: "Manager, Company C",
    image: "https://via.placeholder.com/100",
    testimonial:
      "Outstanding experience. Their team is skilled and very helpful.",
    personLink: "https://linkedin.com/in/alicejohnson",
    companyLink: "https://companyC.com",
  },
];

const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="testimonials" className="bg-gray-50 py-12" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-center text-green-950 mb-4">
          Testimonials
        </h2> */}
        <p className="text-lg text-center text-gray-600 mb-12 font-thin">
          Here's what our clients say about us
        </p>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <p className="text-gray-700 mb-4">"{testimonial.testimonial}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    <a
                      href={testimonial.personLink}
                      className="text-gray-900 hover:text-blue-500"
                      style={{ textDecoration: "none" }}
                    >
                      {testimonial.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    <a
                      href={testimonial.companyLink}
                      className="text-gray-600 hover:text-blue-500"
                      style={{ textDecoration: "none" }}
                    >
                      {testimonial.position}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
