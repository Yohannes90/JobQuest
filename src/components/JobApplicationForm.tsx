import "../styles/App.css";
import { useState } from "react";

/**
 * Main application component.
 * Renders the entire application structure including navigation, lazy-loaded routes,
 * and a footer.
 *
 * @returns JSX element representing the entire application layout.
 */
const JobApplicationForm: React.FC = () => {
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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e) => {
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
        },
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

  return (
    <>
      <div
        id="internship-form"
        className="overflow-hidden bg-gray-100 py-12 min-h-screen pt-28"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col max-w-7xl">
          <div className="text-center">
            <h2 className="uppercase text-3xl text-harPrimary">
              Internship Opportunities
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-thin">
              We'd love to have you join us. Fill out the form below to apply
              for an internship.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-12 lg:flex lg:space-x-12">
            <div className="lg:w-2/3 sm:w-full bg-white p-10 rounded-lg shadow-lg">
              <form
                className="space-y-8"
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
                    <option value="graphic_design">Graphic Design</option>
                    <option value="website_software_development">
                      Website/Software Development
                    </option>
                    <option value="content_creation">Content Creation</option>
                    <option value="social_media_management">
                      Social Media Management
                    </option>
                    <option value="copywriting">Copywriting</option>
                    <option value="project_management">
                      Project Management
                    </option>
                    <option value="data_collection_analysis">
                      Data Collection and Analysis
                    </option>
                    <option value="fundraising_marketing">
                      Fundraising and Marketing
                    </option>
                    <option value="hr">HR</option>
                    <option value="law">Law</option>
                    <option value="video_editing">Video Editing</option>
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
