import { useEffect, useState } from "react";

const HeroNavBtn = () => {
  const [downBtn, setDownBtn] = useState(false);
  const [upBtn, setUpBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY: ", window.scrollY); // Debugging log
      console.log("Window innerHeight: ", window.innerHeight); // Debugging log

      if (window.scrollY >= window.innerHeight && scrollY <= (window.innerHeight + 20)) {
        setUpBtn(true);
        setDownBtn(false);
      } else if(scrollY < window.innerHeight){
        setUpBtn(false);
        setDownBtn(true);
      } else {
        setUpBtn(false);
        setDownBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };
  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  };
  return (
    <div>
      {downBtn && (
        <button
          className="flex justify-center bg-harPrimary z-10 p-0 fixed bottom-14 right-14 h-14 w-14"
          onClick={scrollDown}
        >
          <svg
          className="self-center"
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="white"
          >
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
          </svg>
        </button>
      )}
      {upBtn && (
        <button
          className="flex justify-center bg-harPrimary z-10 p-0 fixed bottom-14 right-14 h-14 w-14"
          onClick={scrollUp}
        >
          <svg
          className="self-center"
            xmlns="http://www.w3.org/2000/svg"
            height="35px"
            viewBox="0 -960 960 960"
            width="35px"
            fill="white"
          >
            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default HeroNavBtn;
