import HeroNavBtn from "./HeroNavBtn";
import { useEffect } from "react";
import AOS from "aos";

import heroImage from "/hero.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-full">
      <div
        id="hero"
        className="hero min-h-screen bg-gray-100"
        data-aos="fade-down"
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-green-950 my-20 font-thin tracking-wider">
              POTENTIAL MADE REAL
            </h1>
          </div>
        </div>
      </div>
      <div className=" grid md:grid-cols-2 w-full min-h-screen bg-gray-50">
        <div
          className="h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center self-center"
          data-aos="fade-right"
        >
          <p className="tracking-wider text-justify leading-loose text-base font-normal lg:text-lg">
            Welcome to Har Consultancy, your partner in transformation and
            growth. We are a licensed social enterprise and consultancy firm
            dedicated to empowering CSOs, startups, and social enterprises in
            Ethiopia. Our tailored services include strategic
            planning,fundraising, program design and implementation, monitoring
            and evaluation, capacity building, branding and visibility,
            establishment and licensing support, and headhunting.
          </p>
        </div>
        <div
          className="h-fit flex-grow card bg-gray-50 text-black  rounded-box place-items-center p-0 mx-5 self-center"
          data-aos="fade-left"
        >
          <img src={heroImage} alt="People working collaboratively in a team setting" className="h-fit w-fit rounded-lg shadow-lg" />
        </div>
      </div>
      <HeroNavBtn />
    </div>
  );
};

export default Hero;
