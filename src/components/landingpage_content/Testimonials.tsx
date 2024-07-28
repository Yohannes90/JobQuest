import { useEffect } from "react";
import AOS from "aos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

/**
 * Interface representing a testimonial provided by a client.
 */
interface Testimonial {
  name: string; // The name of the person providing the testimonial.
  position: string; // The position of the person at their company.
  image: string; // URL of the person's image.
  testimonial: string; // The actual testimonial text.
  personLink: string; // URL to the person's LinkedIn profile.
  companyLink: string; // URL to the person's company website.
}

/**
 * Array of testimonial objects containing details of each testimonial.
 */
const testimonials: Testimonial[] = [
  {
    name: "Yeabsera Wendosen",
    position: "Program coordinator, Company A",
    image:
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    testimonial:
      "Har Consultancy's support in securing funding for our non-profit organization was exceptional. Their expertise and dedication made a significant impact, enabling us to continue serving the community more effectively.",
    personLink: "https://linkedin.com/in/johndyree",
    companyLink: "https://companyA.com",
  },
  {
    name: "Dr. Zekarias",
    position: "Vice president, HVE",
    image:
      "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    testimonial:
      "The collaboration with Har Consultancy on our project was truly rewarding. Their valuable insights and commitment to excellence exceeded our expectations, leading to successful outcomes. We highly recommend their services.",
    personLink: "https://linkedin.com/in/janesmith",
    companyLink: "https://companyB.com",
  },
  {
    name: "Simon Getnet",
    position: "CEO, Lenege",
    image: "testimonial-3.jpeg",
    testimonial:
      "Har Consultancy's partnership with Legnege Tech has been transformative, driving client success with strategic guidance and seamless integration, leading to increased satisfaction, retention, and business growth.",
    personLink: "https://et.linkedin.com/in/simeongetnet",
    companyLink: "https://et.linkedin.com/company/lenege-tech",
  },
];

/**
 * Testimonials component displaying client testimonials with animations.
 * Uses AOS (Animate On Scroll) for animations.
 *
 * @component
 * @example
 * return (
 *   <Testimonials />
 * )
 * @returns {JSX.Element} The rendered Testimonials component
 */
const Testimonials: React.FC = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);
  return (
    <div id="testimonials" className="bg-gray-50 pb-52 pt-24 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="uppercase text-3xl text-center text-harPrimary mb-4">
          Testimonials
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 font-thin">
          Here's what our clients say about us
        </p>
        <div className="grid gap-8 lg:grid-cols-3 text-justify">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              data-aos="fade-right"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mr-6"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    <a
                      href={testimonial.personLink}
                      className="text-gray-900 hover:text-harSecondary"
                      style={{ textDecoration: "none" }}
                    >
                      {testimonial.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-sm">
                    <a
                      href={testimonial.companyLink}
                      className="text-gray-600 hover:text-harSecondary"
                      style={{ textDecoration: "none" }}
                    >
                      {testimonial.position}
                    </a>
                  </p>
                </div>
              </div>
              <sup>
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-harPrimary mr-2"
                  size="lg"
                />
              </sup>
              <span className="text-gray-700">{testimonial.testimonial}</span>
              <sup>
                <FontAwesomeIcon
                  icon={faQuoteRight}
                  className="text-harPrimary ml-2"
                  size="lg"
                />
              </sup>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
