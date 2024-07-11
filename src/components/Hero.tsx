import React, { useState, useEffect } from "react";
import HeroNavBtn from "./HeroNavBtn";
import Slide1 from "/slide1.jpg"; 
import Slide2 from "/slide2.jpg"; 
import Slide3 from "/slide3.jpg"; 
import heroImage from "/hero.jpg";


const Carousel: React.FC = () => {
  const slides = [
    <img src={Slide1} className="min-h-screen" alt="Slide 1" />,
    <img src={Slide2} className="min-h-screen" alt="Slide 2" />,
    <img src={Slide3} className="min-h-screen" alt="Slide 3" />,
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 4000); // Change slide every 4000 milliseconds (3 seconds)

    return () => clearTimeout(timer);
  }, [currentSlide, totalSlides]);

  return (
    <div id="hero" className="overflow-hidden">
      <div className="relative bg-gray-50 overflow-hidden w-full h-screen">
        <div className="absolute blur-sm -top-28 w-full h-full flex items-center justify-center">
          {slides[currentSlide]}
        </div>
        <div className="absolute flex justify-center items-end w-full h-screen">
          <h1 className="z-0 text-5xl w-fit text-white mb-44 font-normal mt-24 text-start tracking-widest">
            POTENTIAL MADE REAL
          </h1>
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

export default Carousel;
