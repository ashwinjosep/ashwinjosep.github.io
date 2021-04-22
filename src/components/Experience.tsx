import React from "react";
import { ExperienceItemInterface } from "../pages/Experience/ExperienceContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle, faLink } from "@fortawesome/free-solid-svg-icons";
import "../styles/Experience.scss";
import useViewport from "../hooks/useDimensions";

interface ExperienceProps {
  experience: ExperienceItemInterface;
}

const Experience = (props: ExperienceProps) => {
  const noIconAvailable = new Set(["SQL", "ABAP", "SAP ERP"]);
  const { width } = useViewport();
  const minWidth = 400;
  const splitWidth = 850;

  return (
    <div className="experience">
      {width > minWidth && (
        <div className="experience-circle-item">
          <FontAwesomeIcon className="experience-circle" icon={faDotCircle} />
          <p>{props.experience.endDate}</p>
        </div>
      )}
      <div
        className={
          width > splitWidth ? "experience-item" : "experience-item-split"
        }
      >
        {width > minWidth && <div className="experience-line" />}
        <div className="experience-details">
          <div>
            <h5>{props.experience.position}</h5>
            <a href={props.experience.link}>
              <p>
                {props.experience.company}, {props.experience.location}
              </p>
              {width > minWidth && (
                <FontAwesomeIcon className="external-link" icon={faLink} />
              )}
            </a>
          </div>
          <div className="tech-stack">
            {props.experience.stack.map((language: string) =>
              noIconAvailable.has(language) ? (
                <div className="language-text mr-10" key={language}>
                  {language}
                </div>
              ) : (
                <i
                  key={language}
                  className={`devicon-${language}-plain language-icon mr-10`}
                />
              )
            )}
          </div>
        </div>
      </div>
      {width > minWidth ? (
        <div className="experience-circle-item">
          <FontAwesomeIcon className="experience-circle" icon={faDotCircle} />
          <p>{props.experience.startDate}</p>
        </div>
      ) : (
        <p>
          {props.experience.startDate} - {props.experience.endDate}
        </p>
      )}
    </div>
  );
};

export default Experience;
