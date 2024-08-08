import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Newsletter = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
        <FontAwesomeIcon icon={faEnvelopeOpenText} /> Email me for jobs
      </h3>
      <p className="text-black/75 text-base mb-4">
        Be the first one notified when a new job is posted
      </p>
      <div className="w-full space-y-4">
        <input
          type="email"
          className="w-full border focus:outline-none border-harSecondary rounded-sm bg-white py-2 px-4"
          name="email"
          id="email"
          placeholder="name@email.com"
        />
        <input
          type="submit"
          value="Subscribe"
          className="w-full bg-harSecondary rounded-sm text-white cursor-pointer p-2"
        />
      </div>
    </div>
  );
};

export default Newsletter;
