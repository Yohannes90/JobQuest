import "../styles/App.css";
import { useState } from "react";

const JobPostForm: React.FC = () => {
    const initialFormData = {
        jobTitle: "",
        companyName: "",
        location: "",
        jobType: "",
        salaryRange: "",
        description: "",
        requirements: "",
        applicationDeadline: "",
        contactEmail: "",
      };

    const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted"); // Debugging log
//     console.log(formData); // Debugging log

//     const data = new FormData();
//     data.append("jobTitle", formData.jobTitle);
//     data.append("companyName", formData.companyName);
//     data.append("location", formData.location);
//     data.append("jobType", formData.jobType);
//     data.append("salaryRange", formData.salaryRange);
//     data.append("description", formData.description);
//     data.append("requirements", formData.requirements);
//     data.append("applicationDeadline", formData.applicationDeadline);
//     data.append("contactEmail", formData.contactEmail);

//     try {
//         const response = await fetch(
//             // `${process.env.REACT_APP_API_URL}/api/submit-job-posting`
//             "http://localhost:3001/api/submit-job-posting", {
//             method: "POST",
//             body: data,
//         });


//       if (response.ok) {
//         console.log("Job posting submitted successfully");
//         resetForm(); // Clear the form fields after successful submission
//       } else {
//         console.error("Failed to submit job posting");
//         // Optionally, show an error message
//       }
//     } catch (error) {
//       console.error("Error submitting job posting:", error);
//       // Optionally, show an error message
//     }
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Debugging log
    console.log(formData); // Debugging log

    // const data = new FormData();
    // data.append("jobTitle", formData.jobTitle);
    // data.append("companyName", formData.companyName);
    // data.append("location", formData.location);
    // data.append("jobType", formData.jobType);
    // data.append("salaryRange", formData.salaryRange);
    // data.append("description", formData.description);
    // data.append("requirements", formData.requirements);
    // data.append("applicationDeadline", formData.applicationDeadline);
    // data.append("contactEmail", formData.contactEmail);

    try {
      const response = await fetch(
        // `${process.env.REACT_APP_API_URL}/api/submit-job-application`
        "http://localhost:3001/api/submit-job-posting", {
        method: "POST",
        // body: data,
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Job posting submitted successfully");
        resetForm(); // Clear the form fields after successful submission
      } else {
        console.error("Failed to submit job posting");
      }
    } catch (error) {
      console.error("Error submitting job posting:", error);
    }
  };
  return (
    <>
      <div
        id="job-post-form"
        className="overflow-hidden bg-gray-100 py-12 min-h-screen pt-28 mx-auto"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col max-w-7xl">
          <div className="text-center">
            <h2 className="uppercase text-3xl text-harPrimary">
              Job Post Creation
            </h2>
            <p className="mt-4 text-lg text-gray-600 font-thin">
              Fill out the form below to create a job post.
            </p>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-12 lg:flex lg:space-x-12">
            <div className="lg:w-2/3 sm:w-full bg-white p-10 rounded-lg shadow-lg">
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <input
                      type="text"
                      name="jobTitle"
                      id="jobTitle"
                      placeholder="Job Title"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 border bg-gray-50 text-gray-800 outline-none border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="location"
                      id="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                      required
                    />
                  </div>
                  <div>
                    <select
                      name="jobType"
                      id="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                      required
                    >
                      <option value="" disabled>
                        Select Job Type
                      </option>
                      <option value="full_time">Full-time</option>
                      <option value="part_time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    name="salaryRange"
                    id="salaryRange"
                    placeholder="Salary Range"
                    value={formData.salaryRange}
                    onChange={handleChange}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                  />
                </div>
                <div>
                  <textarea
                    name="description"
                    id="description"
                    placeholder="Job Description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={6}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="requirements"
                    id="requirements"
                    placeholder="Job Requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={6}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="date"
                    name="applicationDeadline"
                    id="applicationDeadline"
                    value={formData.applicationDeadline}
                    onChange={handleChange}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="contactEmail"
                    id="contactEmail"
                    placeholder="Contact Email"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    className="block w-full bg-gray-50 text-gray-800 outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                    required
                  />
                </div>
                <div className="flex w-full justify-center">
                  <button
                    type="submit"
                    className="w-1/2 py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-harPrimary hover:bg-harSecondary transition duration-200"
                  >
                    Post Job
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

export default JobPostForm;
