import { useLocation } from "react-router-dom";
import "../styles/App.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faTasks,
  faCalendar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface Job {
  id: number;
  jobTitle: string;
  companyName: string;
  jobLocation: string;
  jobType: "full_time" | "part_time" | "contract" | "internship";
  jobCategory:
    | "information_technology"
    | "hr"
    | "software_development"
    | "marketing_and_sales"
    | "product_management";
  description: string;
  workArrangement: "in_person" | "remote" | "hybrid";
  experienceLevel: "no_experience" | "junior" | "senior" | "expert";
  applicationDeadline: string;
  contactEmail: string;
}

/**
 * Main application component.
 * Renders the entire application structure including navigation, lazy-loaded routes,
 * and a footer.
 *
 * @returns JSX element representing the entire application layout.
 */

const JobApplicationForm: React.FC = () => {
  const location = useLocation();
  const { job } = location.state as { job: Job };

  const initialFormData = {
    name: "",
    age: "",
    gender: "",
    phone: "",
    email: "",
    about: "",
    motive: "",
    interest: "",
    cv: null,
    portfolio: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.files) {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted"); // Debugging log
    console.log(formData); // Debugging log

    const data = new FormData();
    data.append("name", formData.name);
    data.append("age", formData.age);
    data.append("gender", formData.gender);
    data.append("phone", formData.phone);
    data.append("email", formData.email);
    data.append("about", formData.about);
    data.append("motive", formData.motive);
    data.append("interest", formData.interest);
    data.append("cv", formData.cv ?? "");
    data.append("portfolio", formData.portfolio);

    try {
      const response = await fetch(
        // `${process.env.REACT_APP_API_URL}/api/submit-job-application`
        "http://localhost:3001/api/submit-job-application",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        console.log("Application submitted successfully");
        resetForm(); // Clear the form fields after successful submission
      } else {
        console.error("Failed to submit application");
        // Optionally, show an error message
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      // Optionally, show an error message
    }
  };

  if (!job) {
    return <p>No job data found.</p>;
  }
  const {
    companyName,
    jobTitle,
    applicationDeadline,
    experienceLevel,
    jobType,
    description,
    jobCategory,
    workArrangement,
  } = job;
  function replaceUnderscoreWithHyphen(str: string): string {
    return str.replace(/_/g, " ");
  }
  function strToDate(str: string): string {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }

  return (
    <>
      <div
        id="job-application-form"
        className="overflow-hidden bg-gray-100 py-12 min-h-screen pt-28"
      >
        <div className="flex justify-center flex-wrap mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="w-11/12 sm:w-1/2 ">
            <section className="card grid grid-cols-3">
              <div className="col-span-1">
                <img src="/icon.png" className="h-12 w-14" alt="" />
              </div>
              <div className="col-span-2">
                <h4 className="text-black mb-1">{companyName}</h4>
                <h3 className="text-black text-lg font-semibold mb-2">
                  {jobTitle}
                </h3>
                <div className="text-black/60 text-sm sm:text-base flex flex-wrap gap-4 mb-2">
                  <span>
                    <FontAwesomeIcon icon={faBuilding} />{" "}
                    {replaceUnderscoreWithHyphen(jobType)}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faBriefcase} />{" "}
                    {replaceUnderscoreWithHyphen(workArrangement)}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faUser} />{" "}
                    {replaceUnderscoreWithHyphen(experienceLevel)}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faTasks} />{" "}
                    {jobCategory === "hr"
                      ? "human resource"
                      : replaceUnderscoreWithHyphen(jobCategory)}
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCalendar} />{" "}
                    {strToDate(applicationDeadline)}
                  </span>

                  <p className="text-[15px] text-black/70 w-full">
                    {description}
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full flex justify-center mt-12 sm:mt-16 lg:mt-12 lg:flex lg:space-x-12 mx-auto">
            <div className="lg:w-2/3 sm:w-full bg-white p-10 rounded-lg shadow-lg">
              <form
                className="w-full space-y-8"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 border bg-gray-50 text-gray-800 outline-none border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      placeholder="Age"
                      value={formData.age}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="gender"
                      id="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                      required
                    >
                      <option value="" disabled>
                        Gender
                      </option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="NA">I don't want to disclose</option>
                    </select>
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
                    name="about"
                    id="about"
                    placeholder="Tell us about yourself (100 words)"
                    value={formData.about}
                    onChange={handleChange}
                    rows={4}
                    maxLength={600}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="motive"
                    id="motive"
                    placeholder="Your motive for joining the internship program"
                    value={formData.motive}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <select
                    name="interest"
                    id="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  >
                    <option value="" disabled>
                      Select Area of Interest
                    </option>
                    <option value="information_technology">
                      Information Technology
                    </option>
                    <option value="hr">HR</option>
                    <option value="software_development">
                      Software Development
                    </option>
                    <option value="marketing_and_sales">
                      Marketing and Sales
                    </option>
                    <option value="product_management">
                      Product Management
                    </option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">Attach your CV:</label>
                  <input
                    type="file"
                    name="cv"
                    id="cv"
                    onChange={handleChange}
                    className="block w-full text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Attach links to your Portfolio:
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    id="portfolio"
                    placeholder="Attach Links (GitHub, website, etc.)"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  />
                </div>
                <div className="flex w-full justify-center">
                  <button
                    type="submit"
                    className="w-1/2 py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-harPrimary hover:bg-harSecondary transition duration-200"
                  >
                    Apply
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApplicationForm;
