import React from "react";
import { AcademicsInterface } from "../pages/Academics/AcademicsContainer";
import "../styles/School.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface SchoolProps {
  school: AcademicsInterface;
}

const School = (props: SchoolProps) => {
  return (
    <div className="school">
      <h5>{props.school.degree}</h5>
      <p>
        <a href={props.school.link} target="_blank" rel="noreferrer">
          {props.school.name}
          <FontAwesomeIcon className="external-link" icon={faLink} />
        </a>
      </p>
      <p>{props.school.location}</p>
      <p className="school-date">
        {props.school.startDate} - {props.school.endDate}
      </p>
    </div>
  );
};

export default School;
