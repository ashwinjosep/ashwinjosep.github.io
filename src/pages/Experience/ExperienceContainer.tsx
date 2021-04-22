import React from "react";
import Experience from "../../components/Experience";
import "../../styles/ExperienceContainer.scss";

const experienceData = require("../../data/experience.json");

export interface ExperienceItemInterface {
  company: string;
  location: string;
  link: string;
  position: string;
  stack: string[];
  startDate: string;
  endDate: string;
}

const ExperienceContainer = () => {
  return (
    <div className="page experience-page d-flex">
      {experienceData &&
        experienceData.map((experienceDataItem: ExperienceItemInterface) => (
          <Experience
            key={experienceDataItem.company}
            experience={experienceDataItem}
          />
        ))}
    </div>
  );
};

export default ExperienceContainer;
