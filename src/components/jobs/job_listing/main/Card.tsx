import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/job-application-form", { state: { job } });
  };
  const { companyName, jobTitle, applicationDeadline,experienceLevel,jobType,description, jobCategory, workArrangement } = job;
  function replaceUnderscoreWithHyphen(str:string): string {
    return str.replace(/_/g, ' ');
  }
  function strToDate(str:string):string{
    const date = new Date(str);
    const year = date.getFullYear();
    const month = String(date.getMonth()+1).padStart(2, '0');
    const day = String(date.getDay()).padStart(2, '0');
    return `${day}-${month}-${year}`
  }
  return (
    <section
      className="card transform hover:ease-in-out duration-200 hover:border-harSecondary focus:border-harSecondary" onClick={handleCardClick}
    >
        <img src="/icon.png" className="h-12 w-14" alt="" />
        <div>
          <h4 className="text-black mb-1">{companyName}</h4>
          <h3 className="text-black text-lg font-semibold mb-2">{jobTitle}</h3>
          <div className="text-black/60 text-sm sm:text-base flex flex-wrap gap-4 mb-2">
            <span><FontAwesomeIcon icon={faBuilding}/> {replaceUnderscoreWithHyphen(jobType)}</span>
            <span><FontAwesomeIcon icon={faBriefcase}/> {replaceUnderscoreWithHyphen(workArrangement)}</span>
            <span><FontAwesomeIcon icon={faUser}/> {replaceUnderscoreWithHyphen(experienceLevel)}</span>
            <span><FontAwesomeIcon icon={faTasks}/> {(jobCategory === 'hr')?'human resource' : replaceUnderscoreWithHyphen(jobCategory)}</span>
            <span><FontAwesomeIcon icon={faCalendar}/> {strToDate(applicationDeadline)}</span>
            
            <p className="text-[15px] text-black/70 w-full">{description}</p>
          </div>
        </div>
    </section>
  );
};

export default Card;
