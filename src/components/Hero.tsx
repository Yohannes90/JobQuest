const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-gray-50">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl text-green-950 my-20 font-thin tracking-wider">
              POTENTIAL MADE REAL
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full min-h-screen bg-gray-50">
        <div className="grid h-fit w-1/2 flex-grow card bg-gray-50 text-black rounded-box place-items-center mx-5 self-center">
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
        <div className="grid h-fit card w-1/2 bg-gray-50 text-black  rounded-box place-items-center p-0 mx-5 self-center">
          <img src="/hero.jpg" alt="" className="h-fit w-fit" />
        </div>
      </div>
    </>
  );
};

export default Hero;
