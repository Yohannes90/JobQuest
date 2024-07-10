import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import HeroNavBtn from "./HeroNavBtn";
import AOS from "aos";
import heroImage from "/hero.jpg";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);
  return (
    <div className="overflow-hidden">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          POTENTIAL MADE{" "}
          <Highlight className="text-black dark:text-white">
            REAL
          </Highlight>
        </motion.h1>
      </HeroHighlight>
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
          className="h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center p-0 mx-5 self-center"
          data-aos="fade-left"
        >
          <img
            src={heroImage}
            alt="People working collaboratively in a team setting"
            className="h-fit w-fit rounded-lg shadow-lg"
          />
        </div>
      </div>
      <HeroNavBtn />
    </div>
  );
};

export default Hero;
