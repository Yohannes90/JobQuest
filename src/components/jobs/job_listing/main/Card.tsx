import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBriefcase ,faBuilding, faTasks, faCalendar, faUser} from  "@fortawesome/free-solid-svg-icons";

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

interface CardProps {
  job: Job;
}

const Card: React.FC<CardProps> = ({ job }) => {
  const { companyName, jobTitle, applicationDeadline,experienceLevel,jobType,description, jobCategory, workArrangement } = job;
  return (
    <section
      className="card"
    >
      <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
        <img src="/harLogo.png" alt="" />
        <div>
          <h4 className="text-black mb-1">{companyName}</h4>
          <h3 className="text-black text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-black/60 text-sm sm:text-base flex flex-wrap gap-4 mb-2">
            <span><FontAwesomeIcon icon={faBuilding}/> {jobType}</span>
            <span><FontAwesomeIcon icon={faBriefcase}/> {workArrangement}</span>
            <span><FontAwesomeIcon icon={faUser}/> {experienceLevel}</span>
            <span><FontAwesomeIcon icon={faTasks}/> {jobCategory}</span>
            <span><FontAwesomeIcon icon={faCalendar}/> {applicationDeadline}</span>
            <p className="text-[15px] text-black/70 ">{description}</p>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Card;
