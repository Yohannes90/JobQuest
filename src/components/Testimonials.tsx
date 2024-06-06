interface Testimonial {
  name: string;
  position: string;
  image: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Dyree",
    position: "CEO, Company A",
    image: "https://via.placeholder.com/100",
    testimonial:
      "This company provided excellent service and support. Highly recommend!",
  },
  {
    name: "Jane Smith",
    position: "CTO, Company B",
    image: "https://via.placeholder.com/100",
    testimonial:
      "Professional and efficient. Their solutions exceeded our expectations.",
  },
  {
    name: "Alice Johnson",
    position: "Manager, Company C",
    image: "https://via.placeholder.com/100",
    testimonial:
      "Outstanding experience. Their team is skilled and very helpful.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-4">
          Testimonials
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Here's what our clients say about us
        </p>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">"{testimonial.testimonial}"</p>
              <div className="flex">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">
                    {testimonial.position}
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
