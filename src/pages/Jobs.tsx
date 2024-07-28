import { useState } from "react";
import Search from "../components/jobs/job_listing/Search";

const Jobs:React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Search query={query} handleInputChange={handleInputChange} />
    </div>
  );
};

export default Jobs;
