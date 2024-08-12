import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar
} from "@fortawesome/free-solid-svg-icons";

interface Blog {
  // id: number;
  blogTitle: string;
  blogCategory:
    | "technology"
    | "business"
    | "lifestyle"
    | "education"
    | "health"
    | "entertainment";
  content: string;
  image: string;
  publishedAt: string;
}

interface CardProps {
  blog: Blog;
}

const Card: React.FC<CardProps> = ({ blog }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/job-application-form", { state: { blog } });
  };
  const {
    blogTitle,
    publishedAt,
    content,
    blogCategory
  } = blog;
  // function replaceUnderscoreWithHyphen(str: string): string {
  //   return str.replace(/_/g, " ");
  // }
  function strToDate(str: string): string {
    const date = new Date(str);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDay()).padStart(2, "0");
    return `${day}-${month}-${year}`;
  }
  return (
    <section
      className="card grid grid-cols-4 transform hover:ease-in-out duration-200 hover:border-harSecondary focus:border-harSecondary"
      onClick={handleCardClick}
    >
      <img
        src="/icon.png"
        className="h-8 w-8 sm:h-12 sm:w-14 col-span-1"
        alt=""
      />
      <div className="col-span-3">
        <h4 className="text-black mb-1">{blogCategory}</h4>
        <h3 className="text-black text-lg font-semibold mb-2">{blogTitle}</h3>
        <div className="text-black/60 text-sm sm:text-base flex flex-wrap gap-4 mb-2">
          <span>
            <FontAwesomeIcon icon={faCalendar} />{" "}
            {strToDate(publishedAt)}
          </span>

          <p className="text-[15px] text-black/70 w-full">{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Card;
