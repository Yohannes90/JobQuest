import { ReactElement, useCallback, useEffect, useState } from "react";
import Search from "../components/jobs/job_listing/Search";
import JobList from "../components/jobs/job_listing/main/JobList";
import Card from "../components/jobs/job_listing/main/Card";
import Sidebar from "../components/jobs/job_listing/sidebar/Sidebar";
import Newsletter from "../components/jobs/job_listing/Newsletter";
import {fetchJobPostings} from '../service/jobService';

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

const Jobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const itemsPerPage = 6;
  // handles input change
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

const loadJobsPostings = useCallback(async () => {
  console.log("Calling loadJobsPostings");
  console.log(`Fetching jobs for page ${currentPage} with query "${query}"`);
  
  try{
    const newJobs: Job[] = await fetchJobPostings(currentPage, 5, query);
    // const uniqueNewJobs = 
    setJobs((prevJobs) => [...prevJobs, ...newJobs]);
    if (currentPage === 1) {
      setJobs(newJobs); // Replace jobs if it's the first page
    } else {
      setJobs((prevJobs) => [...prevJobs, ...newJobs]); // Append jobs for subsequent pages
    }
    if (newJobs.length <= 5) {
      setHasMore(false);
    }
  } catch (err){
    console.error('Failed to fetch job postings: ', err);
  }
  finally{
    setIsLoading(false);
  }
},[currentPage, query]);

  useEffect(() => {
    setIsLoading(true);
    loadJobsPostings();
  }, [currentPage, loadJobsPostings, query]);

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
        ({ workArrangement, experienceLevel, jobType, jobCategory }) =>
          jobType.toLowerCase() === selected.toLowerCase() ||
          workArrangement.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          jobCategory.toLowerCase() === selected.toLowerCase() 
      );
    }
    // slice the data based on current page
    const {startIndex, endIndex} = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, index) => <Card key={index} job={data} />);
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
        {/* job cards  */}
        <div className="bg-gray-50 col-span-2 p-4 rounded">
          {isLoading ? <p className="font-bold text-lg">Loading....</p> : result.length > 0 ? (<JobList result={result} />) : <><h3 className="text-lg text-black font-semibold">{result.length} Jobs</h3><p className="text-black">No data found!</p></>}
        {/* pagination  */}
        {
          result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button className="text-black/70 btn btn-ghost disabled:bg-inherit focus:outline-none" onClick={prevPage} disabled={currentPage === 1}>Previous</button>
              <span className="text-black/70 my-3 font-mono">Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
              <button className="text-black/70 btn btn-ghost disabled:bg-inherit focus:outline-none" onClick={nextpage} disabled={!hasMore} >Next</button>
            </div>
          ) : ""
        }
        </div>
          {/* right side  */}
        <div className="bg-gray-50 p-4 rounded"><Newsletter/></div>
      </div>
    </div>
  );
};

export default Jobs;
