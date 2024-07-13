// import { useEffect } from "react";
// import AOS from "aos";

// /**
//  * Interface representing a partner with name, logo, and URL.
//  */
// interface Partner {
//   name: string; // The name of the partner.
//   logo: string; // The filename of the partner's logo.
//   url: string; // The URL linking to the partner's website.
// }

// /**
//  * Array of partner objects containing details of each partner.
//  */
// const partners: Partner[] = [
//   {
//     name: "Safe Light Initiative",
//     logo: "safelightLogo.PNG",
//     url: "https://safelightet.org",
//   },
//   {
//     name: "Lenege",
//     logo: "lenegeLogo.png",
//     url: "https://partner2.com",
//   },
//   {
//     name: "Creative Hub",
//     logo: "creativeHubLogo.png",
//     url: "https://creativehub.et/",
//   },
//   {
//     name: "Social Enterprise Ethiopia",
//     logo: "socialEnterpriseEthiopiaLogo.png",
//     url: "https://socialenterpriseethiopia.org/",
//   },
//   // {
//   //   name: "Bright Hope",
//   //   logo: "brightHopeLogo.png",
//   //   url: "https://www.brighthope.org/",
//   // },
//   // {
//   //   name: "Efuye Gela",
//   //   logo: "efuyeGelaLogo.png",
//   //   url: "https://efuyegela.com/",
//   // },
//   // {
//   //   name: "Healing Valves",
//   //   logo: "healingValvesLogo1.png",
//   //   url: "https://www.healingvalves.org/",
//   // },
//   // {
//   //   name: "Yango",
//   //   logo: "yangoLogo.png",
//   //   url: "https://yango.com/en_et/",
//   // },
// ];

// /**
//  * Partners component displaying a grid of partner logos with links.
//  * Uses AOS (Animate On Scroll) for animations.
//  *
//  * @component
//  * @example
//  * return (
//  *   <Partners />
//  * )
//  * @returns {JSX.Element} The rendered Partners component
//  */
// const Partners: React.FC = () => {
//   const basePath = import.meta.env.VITE_BASE_PATH || "";
//   useEffect(() => {
//     AOS.init(); // Initialize AOS for animations
//   }, []);
//   return (
//     <div id="partners" className="bg-gray-100 py-16 pb-52 pt-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="uppercase text-3xl text-green-950">Our Partners</h2>
//           <p className="mt-4 text-lg text-gray-600 font-thin">
//             We are proud to collaborate with our trusted partners.
//           </p>
//         </div>
//         <div className="mt-12 grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
//           {partners.map((partner, index) => (
//             <a
//               key={index}
//               href={partner.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
//               data-aos="fade-right"
//             >
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={`${basePath}${partner.logo}`}
//                   alt={partner.name}
//                   className="
//                   // h-25 w-25
//                   h-[200px] w-[300px] object-contain"
//                 />
//               </div>
//               {/* <div className="text-center">
//                 <h3 className="text-lg font-semibold text-gray-900">
//                   {partner.name}
//                 </h3>
//               </div> */}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Partners;

import { useEffect } from "react";
import AOS from "aos";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

/**
 * Interface representing a partner with name, logo, and URL.
 */
interface Partner {
  name: string; // The name of the partner.
  logo: string; // The filename of the partner's logo.
  url: string; // The URL linking to the partner's website.
}

/**
 * Array of partner objects containing details of each partner.
 */
const partners: Partner[] = [
  {
    name: "Safe Light Initiative",
    logo: "safelightLogo.PNG",
    url: "https://safelightet.org",
  },
  {
    name: "Lenege",
    logo: "lenegeLogo.png",
    url: "https://et.linkedin.com/company/lenege-tech",
  },
  {
    name: "Creative Hub",
    logo: "creativeHubLogo.png",
    url: "https://creativehub.et/",
  },
  {
    name: "Social Enterprise Ethiopia",
    logo: "socialEnterpriseEthiopiaLogo.png",
    url: "https://socialenterpriseethiopia.org/",
  },
  {
    name: "Bright Hope Charity",
    logo: "brightHopeLogo.png",
    url: "https://brighthopecharity.org/",
  },
  {
    name: "Efuye Gela",
    logo: "efuyeGelaLogo1.png",
    url: "https://efuyegela.com/",
  },
  {
    name: "Healing Valves",
    logo: "healingValvesLogo1.png",
    url: "https://www.healingvalves.org/",
  },
  {
    name: "Yango",
    logo: "yangoLogoRed.png",
    url: "https://yango.com/en_et/",
  },
];

/**
 * Partners component displaying a carousel of partner logos with links.
 * Uses AOS (Animate On Scroll) for animations.
 *
 * @component
 * @example
 * return (
 *   <Partners />
 * )
 * @returns {JSX.Element} The rendered Partners component
 */
const Partners: React.FC = () => {
  const basePath = import.meta.env.VITE_BASE_PATH || "";

  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="partners" className="overflow-hidden bg-harSecondary pt-2 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center">
          <h2 className="uppercase text-3xl text-harPrimary">Our Partners</h2>
          <p className="mt-4 text-lg text-gray-600 font-thin">
            We are proud to collaborate with our trusted partners.
          </p>
        </div> */}
        <div className="mt-8" data-aos="fade-up">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                // className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={`${basePath}${partner.logo}`}
                    alt={partner.name}
                    className="h-[200px] w-[250px] object-contain"
                  />
                </div>
              </a>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
