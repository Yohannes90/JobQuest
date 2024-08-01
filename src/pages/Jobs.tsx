import { ReactElement, useEffect, useState } from "react";
import Search from "../components/jobs/job_listing/Search";
import JobList from "../components/jobs/job_listing/main/JobList";
import Card from "../components/jobs/job_listing/main/Card";
import Sidebar from "../components/jobs/job_listing/sidebar/Sidebar";
import Newsletter from "../components/jobs/job_listing/Newsletter";

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;
  // handles input change
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
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

// calculate the index range
const calculatePageRange = () => {
  const startIndex = (currentPage -1) * 6;
  const endIndex = startIndex + itemsPerPage;
  return {startIndex, endIndex};
}
// function for the next page
const nextpage = () => {
  if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
    setCurrentPage(currentPage+1);
  }
}
const prevPage = () => {
  if(currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
}

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
    // slice the data based on current page
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, index) => <Card key={index} data={data} />);
  };

  const result: ReactElement[] = filteredData(jobs, selectedCategory, query);

  return (
    <div className="text-black min-h-screen bg-gray-100">
      <Search query={query} handleInputChange={handleInputChange} />
      {/* main content  */}
      <div className="bg-gray-100 sm:grid grid-cols-4 gap-8 lg:px-16 px-4 py-12">
        <div className="bg-gray-50 p-4 rounded">
          {/* left side  */}
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/* job cars  */}
        <div className="bg-gray-50 col-span-2 p-4 rounded">
          {isLoading ? <p className="font-bold text-lg">Loading....</p> : result.length > 0 ? (<JobList result={result} />) : <><h3 className="text-lg text-black font-semibold">{result.length} Jobs</h3><p className="text-black">No data found!</p></>}
        {/* pagination  */}
        {
          result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button className="text-black/70 btn btn-ghost disabled:bg-inherit focus:outline-none" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
              <span className="text-black/70 my-3 font-mono">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
              <button className="text-black/70 btn btn-ghost disabled:bg-inherit focus:outline-none" onClick={nextpage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} >Next</button>
            </div>
          ) : ""
        }
        </div>

        <div className="bg-gray-50 p-4 rounded"><Newsletter/></div>
      </div>
    </div>
  );
};

export default Jobs;
