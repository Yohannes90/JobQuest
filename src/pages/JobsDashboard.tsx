import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobPostForm from "../components/jobs/job_posting/JobPostForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

interface JobApplication {
  id:number;
  name: string;
  age: number;
  gender: "NA" | "male" |"female";
  phone : string;
  email  : string;
  about : string;
  motive : string;
  interest:
  | "information_technology"
  | "hr"
  | "software_development"
  | "marketing_and_sales"
  | "product_management";
  cv: string;
  portfolio : string;
}

interface Job {
  id: number;
  companyName: string;
  jobTitle: string;
  companyLogo: string;
  location: string;
  postingDate: string;
  experienceLevel: "no_experience" | "junior" | "senior" | "expert";
  jobType: "full_time" | "part_time" | "contract" | "internship";
  employmentType: string;
  description: string;
  applicationDeadline: string;
  contactEmail: string;
  jobCategory: 
  | "information_technology"
  | "hr"
  | "software_development"
  | "marketing_and_sales"
  | "product_management";
  workArrangement: "in_person" | "remote" | "hybrid";
}

const JobsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("employees");
  const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
  const [jobPostings, setJobPostings] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [isEditingJob, setIsEditingJob] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/job-applications",
          {
            credentials: "include", // Ensures cookies are sent with the request
          },
        );
        if (response.status === 401) {
          navigate("/login"); // Redirect to login if unauthorized
        } else {
          const data = await response.json();
          setJobApplications(data);
        }
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    const fetchJobPostings = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/job-postings/all", {
          credentials: "include", // Ensures cookies are sent with the request
        });
        if (response.status === 401) {
          navigate("/login"); // Redirect to login if unauthorized
        } else {
          const data = await response.json();
          setJobPostings(data);
        }
      } catch (error) {
        console.error("Error fetching job postings:", error);
      }
    };

    fetchJobApplications();
    fetchJobPostings();
  }, [navigate]);

  const handleDeleteApplication = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/job-applications/${id}`,
        {
          method: "DELETE",
          credentials: "include", // Ensures cookies are sent with the request
        },
      );
      if (response.status === 401) {
        navigate("/login"); // Redirect to login if unauthorized
      } else {
        setJobApplications(jobApplications.filter((app) => app.id !== id));
      }
    } catch (error) {
      console.error("Error deleting application:", error);
    }
  };

  const handleDeleteJobPosting = async (id: number) => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/job-postings/${id}`,
        {
          method: "DELETE",
          credentials: "include", // Ensures cookies are sent with the request
        },
      );
      if (response.status === 401) {
        navigate("/login"); // Redirect to login if unauthorized
      } else {
        setJobPostings(jobPostings.filter((job) => job.id !== id));
      }
    } catch (error) {
      console.error("Error deleting job posting:", error);
    }
  };

  const handleEditJob = (job : Job) => {
    setEditingJob(job);
    setIsEditingJob(true);
    setActiveTab("addJobPost");
  };

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3001/api/logout", {
        method: "POST",
        credentials: "include", // Ensures cookies are sent with the request
      });
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-harPrimary">
        Admin Dashboard
      </h1>
      <div className="flex justify-between items-center mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("employees")}
            className={`px-4 py-2 rounded ${activeTab === "employees" ? "bg-harSecondary text-white" : "bg-white text-harSecondary"}`}
          >
            Manage Potential Employees
          </button>
          <button
            onClick={() => setActiveTab("jobPosts")}
            className={`px-4 py-2 rounded ${activeTab === "jobPosts" ? "bg-harSecondary text-white" : "bg-white text-harSecondary"}`}
          >
            Manage Job Posts
          </button>
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-harPrimary text-white rounded"
        >
          Logout
        </button>
      </div>

      {activeTab === "employees" && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-harPrimary mb-4">
            Job Applications
          </h2>
          <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8">
            <table className="min-w-full bg-white">
              <thead className="bg-harPrimary text-white">
                <tr>
                  <th className="py-2 px-4">Applicant Name</th>
                  <th className="py-2 px-4">Position</th>
                  <th className="py-2 px-4">About</th>
                  <th className="py-2 px-4">Motive</th>
                  <th className="py-2 px-4">Age</th>
                  <th className="py-2 px-4">Gender</th>
                  <th className="py-2 px-4">Phone</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Portfolio</th>
                  <th className="py-2 px-4">CV</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobApplications.map((application) => (
                  <tr
                    key={application.id}
                    className="bg-green-100 border-b hover:bg-green-200"
                  >
                    <td className="py-2 px-4">{application.name}</td>
                    <td className="py-2 px-4">{application.interest}</td>
                    <td className="py-2 px-4">{application.about}</td>
                    <td className="py-2 px-4">{application.motive}</td>
                    <td className="py-2 px-4">{application.age}</td>
                    <td className="py-2 px-4">{application.gender}</td>
                    <td className="py-2 px-4">{application.phone}</td>
                    <td className="py-2 px-4">{application.email}</td>
                    <td className="py-2 px-4">{application.portfolio}</td>
                    <td className="py-2 px-4">
                      {application.cv && (
                        <a
                          href={`/${application.cv}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View CV
                        </a>
                      )}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteApplication(application.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "jobPosts" && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-harPrimary mb-4">
            Current Job Postings
          </h2>
          <button
            onClick={() => {
              setIsEditingJob(false);
              setEditingJob(null);
              setActiveTab("addJobPost");
            }}
            className="px-4 py-2 mb-4 bg-harSecondary text-white rounded"
          >
            Add New Job
          </button>
          <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8">
            <table className="min-w-full bg-white">
              <thead className="bg-harPrimary text-white">
                <tr>
                  <th className="py-2 px-4">Job Title</th>
                  <th className="py-2 px-4">Company Name</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Job Type</th>
                  <th className="py-2 px-4">Job Category</th>
                  <th className="py-2 px-4">Work Arrangement</th>
                  <th className="py-2 px-4">Experience Level</th>
                  <th className="py-2 px-4">Application Deadline</th>
                  <th className="py-2 px-4">Contact Email</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobPostings.map((job) => (
                  <tr
                    key={job.id}
                    className="bg-green-100 border-b hover:bg-green-200"
                  >
                    <td className="py-2 px-4">{job.jobTitle}</td>
                    <td className="py-2 px-4">{job.companyName}</td>
                    <td className="py-2 px-4">{job.location}</td>
                    <td className="py-2 px-4">{job.jobType}</td>
                    <td className="py-2 px-4">{job.jobCategory}</td>
                    <td className="py-2 px-4">{job.workArrangement}</td>
                    <td className="py-2 px-4">{job.experienceLevel}</td>
                    <td className="py-2 px-4">
                      {new Date(job.applicationDeadline).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4">{job.contactEmail}</td>
                    <td className="py-2 px-4">
                      <button
                        className="text-blue-500 mr-4"
                        onClick={() => handleEditJob(job)}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() => handleDeleteJobPosting(job.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === "addJobPost" && (
        <div>
          <h2 className="text-2xl font-bold text-harPrimary mb-4">
            {isEditingJob ? "Edit Job Posting" : "Add New Job Posting"}
          </h2>
          {/* changed it to single props after some error with the other like setActivetab  */}
          <JobPostForm
            job={editingJob}
          /> 
        </div>
      )}
    </div>
  );
};

export default JobsDashboard;
