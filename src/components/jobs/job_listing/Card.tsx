import React from 'react'

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

interface CardProps{
    data: Job;
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
    <div className='text-black'>{data.jobTitle}</div>
  )
}

export default Card