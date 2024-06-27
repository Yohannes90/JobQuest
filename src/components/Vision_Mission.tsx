import { useEffect } from "react";
import AOS from "aos";
import vmImage from "/vm_pic.jpg";

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
        className="grid order-2 md:order-1 h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center mx-5 self-start"
        data-aos="fade-right"
      >
        <img className="rounded-xl shadow-md" src={vmImage} alt="" />
      </div>

      <div
        className="grid order-1 md:order-2 h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center mx-5 self-start"
        data-aos="fade-left"
      >
        <h2 className="pb-1 border-b-4 my-5 border-harSecondary text-3xl text-green-950 mb-10 tracking-widest">
          VISION
        </h2>
        <p className="tracking-wider text-justify leading-loose text-base font-normal lg:text-lg bg-gray-50">
          Empowering impact organizations in Ethiopia to maximize their
          potential through strategic consulting services.
        </p>
        <h2 className="pb-1 border-b-4 mt-16 border-harSecondary text-3xl text-green-950 mb-10 tracking-widest">
          MISSION
        </h2>
        <p className="tracking-wider text-justify leading-loose text-base font-normal lg:text-lg  bg-gray-50">
          {" "}
          Building a network of strong and sustainable community organizations
          in Ethiopia, driving positive change and lasting impact.
        </p>
      </div>
    </div>
  );
};

export default Vision_Mission;
