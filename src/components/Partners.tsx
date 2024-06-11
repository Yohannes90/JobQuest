interface Partner {
  name: string;
  logo: string;
  url: string;
}

const partners: Partner[] = [
  {
    name: "Partner 1",
    logo: "/cisco.svg",
    url: "https://partner1.com",
  },
  {
    name: "Partner 2",
    logo: "/citi.svg",
    url: "https://partner2.com",
  },
  {
    name: "Partner 3",
    logo: "/samsung.svg",
    url: "https://partner3.com",
  },
  {
    name: "Partner 4",
    logo: "/att.svg",
    url: "https://partner4.com",
  },
];

const Partners: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 pb-52">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center">
          <h2 className="text-3xl font-bold text-green-950">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-thin">
            We are proud to collaborate with our trusted partners.
          </p>
        </div> */}
        <div className="mt-12 grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-20 w-20 object-contain"
                />
              </div>
              {/* <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {partner.name}
                </h3>
              </div> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
