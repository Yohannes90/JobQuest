import { useEffect } from "react";
import AOS from "aos";

const ContactUs: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      id="contact"
      className="bg-gray-100 py-12 min-h-screen"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-950">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 font-thin">
            We'd love to hear from you. Fill out the form below to get in touch.
          </p>
        </div>
        <div
          className="mt-8 sm:mt-12 lg:mt-16 lg:w-3/4 self-center"
          data-aos="fade-right"
        >
          <div className="max-w-7xl mx-auto bg-white p-12 rounded-lg shadow-lg">
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="block w-full px-5 py-3 border bg-slate-50 text-black outline-none border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="block w-full bg-slate-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full bg-slate-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={6}
                  className="block w-full bg-slate-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  required
                />
              </div>
              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  className="w-1/2 py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
