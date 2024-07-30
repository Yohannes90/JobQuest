import React, { ReactElement } from 'react'

interface JobListProps {
    result: ReactElement[]
}

const JobList:React.FC<JobListProps> = ({result}) => {
  return (
    <div>{result}</div>
  )
}

export default JobList