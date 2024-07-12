import { useEffect, useState } from "react";

/**
 * HeroNavBtn component
 *
 * This component renders navigation buttons for scrolling up and down the hero section.
 * The buttons appear based on the current scroll position of the window.
 * - When the user scrolls down past the hero section, an up button appears.
 * - When the user is at the top of the page, a down button appears.
 *
 * The component also initializes scroll event listeners to handle the visibility of the buttons.
 *
 * @component
 * @example
 * return (
 *   <HeroNavBtn />
 * )
 * @returns {JSX.Element} The rendered HeroNavBtn component
 */
const HeroNavBtn = () => {
  const [downBtn, setDownBtn] = useState(false);
  const [upBtn, setUpBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log("ScrollY: ", window.scrollY); // Debugging log
      console.log("Window innerHeight: ", window.innerHeight); // Debugging log

      if (window.scrollY >= window.innerHeight) {
        setUpBtn(true);
        setDownBtn(false);
      } else if (scrollY < window.innerHeight) {
        setUpBtn(false);
        setDownBtn(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  /**
   * Scrolls the window down by the height of the window
   */
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };
  /**
   * Scrolls the window up by the height of the window
   */
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {downBtn && (
        <button
          className="flex justify-center rounded-full bg-harPrimary z-10 p-0 fixed bottom-14 right-1/2 h-14 w-14"
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
