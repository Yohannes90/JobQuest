import { ReactElement, useEffect, useState } from "react";
import Search from "../components/jobs/job_listing/Search";
import JobList from "../components/jobs/job_listing/JobList";
import Card from "../components/jobs/job_listing/Card";

interface Job {
  id: number;
  companyName: string;
  jobTitle: string;
  companyLogo: string;
  minPrice: string;
  maxPrice: string;
  salaryType: string;
  jobLocation: string;
  postingDate: string;
  experienceLevel: string;
  jobType: string;
  employmentType: string;
  description: string;
}

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  // filter job by title
  const filteredItems: Job[] = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // Radio filtering
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };
  // button based filtering
  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(event.target.value);
  };
  // main function
  const filteredData = (
    jobs: Job[],
    selected: string | null,
    query: string
  ) => {
    let filteredJobs: Job[] = jobs;
    if (query) {
      filteredJobs = filteredItems;
    }

    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({ employmentType, experienceLevel, jobType }) =>
          jobType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase()
      );
    }
    
    return filteredJobs.map((data, index) => <Card key={index} data={data} />);
  };

  const result: ReactElement[] = filteredData(jobs, selectedCategory, query);

  return (
    <div className="min-h-screen bg-gray-50">
      <Search query={query} handleInputChange={handleInputChange} />
      <div className="bg-gray-200">
        <div>Left</div>
        <div><JobList result={result} /></div>
        <div>Right</div>
      </div>
    </div>
  );
};

export default Jobs;
