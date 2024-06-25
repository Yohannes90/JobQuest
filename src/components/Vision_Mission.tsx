import { useEffect } from "react";
import AOS from "aos";

/**
 * Vision and Mission Component.
 * Displays the vision and mission statements of Har Consultancy.
 * Utilizes AOS for animations on component mount.
 *
 * @component
 * @example
 * return (
 *   <VisionMission />
 * )
 * @returns {JSX.Element} The rendered Vision and Mission component
 */
const Vision_Mission = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);
  return (
    <div
      id="vision-mission"
      className="overflow-x-hidden grid md:grid-cols-2 w-fit min-h-screen bg-gray-50 z-0"
    >
      <div
        className="grid h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center mx-5 self-start"
        data-aos="fade-right"
      >
        <h2 className="pb-1 border-b-4 border-harSecondary text-3xl text-green-950 mb-10 tracking-widest">
          VISION
        </h2>
        <p className="tracking-wider text-justify leading-loose text-base font-normal lg:text-lg bg-gray-50">
          At Har Consultancy, we envision a future where every community
          organization in Ethiopia is a beacon of strength and sustainability,
          driving transformative change and creating lasting impact. Our
          commitment is to be the trusted partner in this journey, providing
          comprehensive support and expertise to CSOs, startups, and social
          enterprises. By empowering these organizations with tailored strategic
          planning, innovative program design and implementation, we aim to
          build a resilient network that thrives and flourishes. Together, we
          will shape a vibrant and prosperous Ethiopia, where empowered
          communities lead the way to sustainable development and progress.
        </p>
      </div>

      <div
        className="grid h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center mx-5 self-start"
        data-aos="fade-left"
      >
        <h2 className="pb-1 border-b-4 border-harSecondary text-3xl text-green-950 mb-10 tracking-widest">
          MISSION
        </h2>
        <p className="tracking-wider text-justify leading-loose text-base font-normal lg:text-lg  bg-gray-50">
          {" "}
          Har Consultancy is dedicated to empowering community organizations,
          startups, and social enterprises in Ethiopia by providing
          comprehensive, tailored support and expertise. Our mission is to
          foster sustainable growth and impactful change through strategic
          planning, innovative program design and implementation, robust
          capacity building, enhanced branding and visibility, and essential
          establishment and licensing support. We strive to strengthen and
          elevate our clients, enabling them to drive positive transformation
          and contribute meaningfully to the sustainable development and
          prosperity of Ethiopia.Empowering impact organizations in Ethiopia to
          maximize their potential through strategic consulting services.
        </p>
      </div>
    </div>
  );
};

export default Vision_Mission;
