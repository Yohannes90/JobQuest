import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock, faCalendar, faUser} from  "@fortawesome/free-solid-svg-icons";

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

interface CardProps {
  data: Job;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const { companyName, jobTitle, companyLogo, salaryType,postingDate,experienceLevel,jobType,employmentType,description } = data;
  return (
    <section
      className="m-5 rounded-md border-2 border-solid border-gray-200
    cursor-pointer"
    >
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src={companyLogo} alt="" />
        <div>
          <h4 className="text-black mb-1">{companyName}</h4>
          <h3 className="text-black text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-black/60 text-sm sm:text-base flex flex-wrap gap-4 mb-2">
            <span><FontAwesomeIcon icon={faCalendar}/> {postingDate}</span>
            <span><FontAwesomeIcon icon={faClock}/> {employmentType}</span>
            <span><FontAwesomeIcon icon={faUser}/> {experienceLevel}</span>
            <p className="text-[15px] text-black/70 ">{description}</p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
