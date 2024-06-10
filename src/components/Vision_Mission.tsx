const Vision_Mission = () => {
  return (
    <div className="flex w-full min-h-screen justify-center bg-gray-50 z-0">
      <div className="grid h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center mx-5 self-center">
        <h2 className="text-2xl text-green-950 mb-10 tracking-widest">
          VISION
        </h2>
        <p className="tracking-wider text-justify leading-6 text-base bg-gray-50">
          Building a network of strong and sustainable community organizations
          in Ethiopia, driving positive change and lasting impact.
        </p>
      </div>

      <div className="grid h-fit flex-grow card bg-gray-50 text-black rounded-box place-items-center mx-5 self-center">
        <h2 className="text-2xl text-green-950 mb-10 tracking-widest">
          MISSION
        </h2>
        <p className="tracking-wider text-justify leading-6 text-base bg-gray-50">
          Empowering impact organizations in Ethiopia to maximize their
          potential through strategic consulting services.
        </p>
      </div>
    </div>
  );
};

export default Vision_Mission;
