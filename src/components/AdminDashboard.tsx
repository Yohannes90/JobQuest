import { useEffect, useState } from 'react';
import JobPostForm from './JobPostForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const AdminDashboard: React.FC = () => {
  const [jobApplications, setJobApplications] = useState([]);
  const [jobPostings, setJobPostings] = useState([]);

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/job-applications');
        const data = await response.json();
        setJobApplications(data);
      } catch (error) {
        console.error('Error fetching job applications:', error);
      }
    };

    const fetchJobPostings = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/job-postings');
        const data = await response.json();
        setJobPostings(data);
      } catch (error) {
        console.error('Error fetching job postings:', error);
      }
    };

    fetchJobApplications();
    fetchJobPostings();
  }, []);

  const handleDeleteApplication = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/api/job-applications/${id}`, { method: 'DELETE' });
      setJobApplications(jobApplications.filter((app) => app.id !== id));
    } catch (error) {
      console.error('Error deleting application:', error);
    }
  };

  const handleDeleteJobPosting = async (id: number) => {
    try {
      await fetch(`http://localhost:3001/api/job-postings/${id}`, { method: 'DELETE' });
      setJobPostings(jobPostings.filter((job) => job.id !== id));
    } catch (error) {
      console.error('Error deleting job posting:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-harPrimary">Admin Dashboard</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-harPrimary mb-4">Potential Employees</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8">
          <table className="min-w-full bg-white">
            <thead className="bg-harPrimary text-white">
              <tr>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Age</th>
                <th className="py-2 px-4">Gender</th>
                <th className="py-2 px-4">Phone</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">About</th>
                <th className="py-2 px-4">Motive</th>
                <th className="py-2 px-4">Interest</th>
                <th className="py-2 px-4">Portfolio</th>
                <th className="py-2 px-4">CV</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobApplications.map((application) => (
                <tr key={application.id} className="bg-green-100 border-b hover:bg-green-200">
                  <td className="py-2 px-4">{application.name}</td>
                  <td className="py-2 px-4">{application.age}</td>
                  <td className="py-2 px-4">{application.gender}</td>
                  <td className="py-2 px-4">{application.phone}</td>
                  <td className="py-2 px-4">{application.email}</td>
                  <td className="py-2 px-4">{application.about}</td>
                  <td className="py-2 px-4">{application.motive}</td>
                  <td className="py-2 px-4">{application.interest}</td>
                  <td className="py-2 px-4">{application.portfolio}</td>
                  <td className="py-2 px-4">
                    {application.cv && (
                      <a href={`/${application.cv}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                        View CV
                      </a>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    <button className="text-red-500" onClick={() => handleDeleteApplication(application.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-harPrimary mb-4">Current Job Postings</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg mb-8">
          <table className="min-w-full bg-white">
            <thead className="bg-harPrimary text-white">
              <tr>
                <th className="py-2 px-4">Job Title</th>
                <th className="py-2 px-4">Company Name</th>
                <th className="py-2 px-4">Location</th>
                <th className="py-2 px-4">Job Type</th>
                <th className="py-2 px-4">Salary Range</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobPostings.map((job) => (
                <tr key={job.id} className="bg-green-100 border-b hover:bg-green-200">
                  <td className="py-2 px-4">{job.jobTitle}</td>
                  <td className="py-2 px-4">{job.companyName}</td>
                  <td className="py-2 px-4">{job.location}</td>
                  <td className="py-2 px-4">{job.jobType}</td>
                  <td className="py-2 px-4">{job.salaryRange}</td>
                  <td className="py-2 px-4">
                    <button className="text-yellow-500 mr-2">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="text-red-500" onClick={() => handleDeleteJobPosting(job.id)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-harPrimary mb-4">Add New Job</h2>
        <JobPostForm />
      </div>
    </div>
  );
};

export default AdminDashboard;
