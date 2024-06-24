import { useEffect } from "react";
import AOS from "aos";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const ContactUs: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="contact" className="bg-gray-100 py-16 min-h-screen pt-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl text-green-900">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-700 font-light">
            We'd love to hear from you. Fill out the form below to get in touch.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-20 lg:flex lg:space-x-12">
          <div
            className="lg:w-1/2 sm:w-full bg-white p-10 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="block w-full px-5 py-3 border bg-gray-50 text-gray-800 outline-none border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
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
                  className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={4}
                  className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  required
                />
              </div>
              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  className="w-1/2 py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div
            className="lg:w-1/2 sm:w-full h-96 mt-10 lg:mt-0"
            data-aos="fade-left"
          >
            <MapContainer
              center={[9.0120691, 38.7473818]}
              zoom={15}
              scrollWheelZoom={false}
              className="h-full rounded-lg shadow-lg"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[9.0120691, 38.7473818]}>
                <Popup>Har Consultancy Location</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
