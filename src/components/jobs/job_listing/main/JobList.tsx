import React, { ReactElement } from "react";

interface JobListProps {
  result: ReactElement[];
}

const JobList: React.FC<JobListProps> = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-black text-lg font-bold">{result.length} Jobs</h3>
      </div>
      <section>{result}</section>
    </>
  );
};

export default JobList;
