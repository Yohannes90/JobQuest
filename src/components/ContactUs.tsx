import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * ContactUs component
 *
 * This component renders the contact us section including a form and a map.
 * It initializes AOS (Animate On Scroll) for animations.
 *
 * @returns {JSX.Element} The rendered ContactUs component
 */
const ContactUs: React.FC = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ntwmp2d", // service ID
        "template_hii7y5l", // template ID
        formData,
        "OJbylDnVpUFDkG0yk", // user or api ID
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div
      id="contact"
      className="overflow-hidden bg-gray-100 py-12 min-h-screen pt-28"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col max-w-7xl">
        <ToastContainer />
        <div className="text-center" data-aos="fade-up">
          <h2 className="uppercase text-3xl text-harPrimary">Contact Us</h2>
          <p className="mt-4 text-lg text-gray-600 font-thin">
            We'd love to hear from you. Fill out the form below to get in touch.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-12 lg:flex lg:space-x-12">
          <div
            className="lg:w-2/3 sm:w-full bg-white p-10 rounded-lg shadow-lg"
            data-aos="fade-right"
          >
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.phone}
                    onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  required
                />
              </div>
              <div className="flex w-full justify-center">
                <button
                  type="submit"
                  className="w-1/2 py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-harPrimary hover:bg-harSecondary transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div
            className="lg:w-1/3 sm:w-full bg-harPrimary p-10 rounded-lg shadow-lg mt-10 lg:mt-0"
            data-aos="fade-left"
          >
            <div className="mb-6">
              <h5 className="text-lg text-white font-semibold mb-2">
                Address:
              </h5>
              <p className="text-lg text-white">
                Ras Abebe Aregay Street, Kirkos, Ethiopia
              </p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg text-white font-semibold mb-2">Phone:</h5>
              <p className="text-lg text-white">+251 123 456 789</p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg text-white font-semibold mb-2">Email:</h5>
              <p>
                <a className="text-lg text-white" href="mailto:name@email.com">
                  info@harconsultancy.org
                </a>
              </p>
            </div>
            <div className="mb-6">
              <h5 className="text-lg text-white font-semibold mb-2">
                Socials:
              </h5>
              <div className="flex space-x-4">
                <a
                  href="https://x.com/consult_Har"
                  className="text-white hover:text-harSecondary"
                >
                  <FontAwesomeIcon icon={faXTwitter} size="xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/har-consultancy/"
                  className="text-white hover:text-harSecondary"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
                <a href="#" className="text-white hover:text-harSecondary">
                  <FontAwesomeIcon icon={faWhatsapp} size="xl" />
                </a>
                <a href="#" className="text-white hover:text-harSecondary">
                  <FontAwesomeIcon icon={faTelegram} size="xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <MapContainer
            center={[9.0120691, 38.7473818]}
            zoom={16}
            scrollWheelZoom={false}
            className="h-64 rounded-lg shadow-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[9.0120691, 38.7473818]}>
              <Popup>Your Business Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
