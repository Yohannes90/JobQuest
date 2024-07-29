import React, { useEffect, useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [jobApplications, setJobApplications] = useState([]);

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

    fetchJobApplications();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-800 text-white">
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
            </tr>
          </thead>
          <tbody>
            {jobApplications.map((application) => (
              <tr key={application.id} className="bg-blue-100 border-b hover:bg-blue-200">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
