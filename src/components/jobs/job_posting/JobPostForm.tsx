import React, { useState, useEffect } from "react";
import Success from "../../pop_ups/Success";
import Error from "../../pop_ups/Error";

interface JobPostFormData {
  id: number;
  jobTitle: string;
  companyName: string;
  location: string;
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

interface JobPostFormProps {
  job: JobPostFormData | null;
  // onSubmit: (data: JobPostFormData) => void;
}

const JobPostForm: React.FC<JobPostFormProps> = ({ job }) => {
  const initialFormData = {
    id: -1,
    jobTitle: "",
    companyName: "",
    location: "",
    jobType: "" as "full_time" | "part_time" | "contract" | "internship",
    jobCategory: "" as
      | "information_technology"
      | "hr"
      | "software_development"
      | "marketing_and_sales"
      | "product_management",
    description: "",
    workArrangement: "" as "in_person" | "remote" | "hybrid",
    experienceLevel: "" as "no_experience" | "junior" | "senior" | "expert",
    applicationDeadline: "",
    contactEmail: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (job) {
      setFormData(job);
    }
  }, [job]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted"); // Debugging log
    console.log(formData); // Debugging log

    try {
      const url = job
        ? `http://localhost:3001/api/job-postings/${formData.id}`
        : "http://localhost:3001/api/submit-job-posting";
      const method = job ? "PUT" : "POST";

      console.log(`Sending ${method} request to ${url}`); // Debugging log

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const msg = "Job posting submitted successfully";
        setShowSuccess(true);
        setTimeout(() => {
          if (showSuccess) {
            <Success msg={msg} />;
          }
        }, 3000);
        setShowSuccess(false);
        resetForm(); // Clear the form fields after successful submission
        // onSubmit(formData); // Notify parent component of submission
      } else {
        const msg = "Failed to submit job posting";
        setTimeout(() => {
          <Error msg={msg} />;
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting job posting:", error);
    }
  };

  return (
    <div
      id="job-post-form"
      className="text-black min-h-screen flex items-center justify-center py-12 bg-gray-100"
    >
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-4xl">
        {showSuccess && <Success msg="Job posting submitted successfully" />}
        <div className="text-center mb-6">
          <h2 className="uppercase text-3xl text-harPrimary">
            {job ? "Update Job Post" : "Job Post Creation"}
          </h2>
          <p className="mt-4 text-lg text-gray-600 font-thin">
            {job
              ? "Update the details of the job post below."
              : "Fill out the form below to create a job post."}
          </p>
        </div>
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
                className="block w-full px-5 py-3 border bg-gray-50 text-black outline-none border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
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
                className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
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
                className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                required
              />
            </div>
            <div>
              <select
                name="jobType"
                id="jobType"
                value={formData.jobType}
                onChange={handleChange}
                className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
                required
              >
                <option className="text-gray-600 bg-gray-200" value="" disabled>
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
            <select
              name="jobCategory"
              id="jobCategory"
              value={formData.jobCategory}
              onChange={handleChange}
              className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
              required
            >
              <option value="" disabled>
                Select Job Category
              </option>
              <option value="information_technology">
                Information Technology
              </option>
              <option value="hr">HR</option>
              <option value="software_development">Software Development</option>
              <option value="marketing_and_sales">Marketing and Sales</option>
              <option value="product_management">Product Management</option>
            </select>
          </div>
          <div>
            <select
              name="workArrangement"
              id="workArrangement"
              value={formData.workArrangement}
              onChange={handleChange}
              className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
              required
            >
              <option value="" disabled>
                Select Work Arrangement
              </option>
              <option value="in_person">In-person</option>
              <option value="remote">Remote</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
          <div>
            <select
              name="experienceLevel"
              id="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
              required
            >
              <option value="" disabled>
                Select Experience Level
              </option>
              <option value="no_experience">No Experience</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="expert">Expert</option>
            </select>
          </div>
          <div>
            <textarea
              name="description"
              id="description"
              placeholder="Job Description"
              value={formData.description}
              onChange={handleChange}
              rows={6}
              className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
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
              className="block w-full bg-gray-50 text-blackoutline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
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
              className="block w-full bg-gray-50 text-black outline-none px-5 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-900 focus:border-green-900"
              required
            />
          </div>
          <div className="flex w-full justify-center">
            <button
              type="submit"
              className="w-1/2 py-3 px-6 outline-none text-lg font-medium rounded-md text-white bg-harPrimary hover:bg-harSecondary transition duration-200"
            >
              {job ? "Update Job" : "Post Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobPostForm;
