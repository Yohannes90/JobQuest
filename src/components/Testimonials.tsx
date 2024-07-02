import { useEffect } from "react";
import AOS from "aos";

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
    image: "https://via.placeholder.com/100",
    testimonial:
      "Har Consultancy has been an invaluable partner in our mission to serve the community. As a non-profit organization, finding the right funding opportunities is always a challenge. The team at Har Consultancy went above and beyond to help us secure significant funds and navigate the complex grant application process. Their dedication, expertise, and passion for our cause were evident in every interaction. Thanks to their support, we can continue making a positive impact in our community. We are deeply grateful for their partnership and highly recommend their services.",
    personLink: "https://linkedin.com/in/johndyree",
    companyLink: "https://companyA.com",
  },
  {
    name: "Dr. Zekarias",
    position: "Vice president, HVE",
    image: "https://via.placeholder.com/100",
    testimonial:
      "Our collaboration with Har Consultancy on our recent project was a truly rewarding experience. From the very beginning, their team demonstrated exceptional skill and dedication. They provided valuable insights that helped us overcome challenges and achieve our project goals efficiently. The synergy between our teams was seamless, and the results exceeded our expectations. Har Consultancy's commitment to excellence and their genuine investment in our success made a significant difference. We look forward to partnering with them on future projects and highly recommend their services.",
    personLink: "https://linkedin.com/in/janesmith",
    companyLink: "https://companyB.com",
  },
  // {
  //   name: "Alice Johnson",
  //   position: "Manager, Company C",
  //   image: "https://via.placeholder.com/100",
  //   testimonial:
  //     "Har Consultancy has been an invaluable partner in our mission to serve the community. As a non-profit organization, finding the right funding opportunities is always a challenge. The team at Har Consultancy went above and beyond to help us secure significant funds and navigate the complex grant application process. Their dedication, expertise, and passion for our cause were evident in every interaction. Thanks to their support, we can continue making a positive impact in our community. We are deeply grateful for their partnership and highly recommend their services.",
  //   personLink: "https://linkedin.com/in/alicejohnson",
  //   companyLink: "https://companyC.com",
  // },
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
        <h2 className="uppercase text-3xl text-center text-green-950 mb-4">
          Testimonials
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12 font-thin">
          Here's what our clients say about us
        </p>
        <div className="grid gap-8 lg:grid-cols-2 text-justify">
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
              <p className="text-gray-700">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
