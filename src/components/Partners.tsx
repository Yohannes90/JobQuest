interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "Partner 1",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Partner 2",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Partner 3",
    logo: "https://via.placeholder.com/150",
  },
  {
    name: "Partner 4",
    logo: "/icon.png",
  },
];

const Partners: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are proud to collaborate with our trusted partners.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-20 object-contain"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {partner.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
