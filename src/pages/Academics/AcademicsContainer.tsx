import React from "react";
import School from "../../components/School";
import "../../styles/AcademicsContainer.scss";

const academicsData = require("../../data/academics.json");

export interface AcademicsInterface {
  name: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
  link: string;
}

const AcademicsContainer = () => {
  return (
    <div className="page academics-page d-flex">
      {academicsData &&
        academicsData.map((school: AcademicsInterface) => (
          <School key={school.name} school={school} />
        ))}
    </div>
  );
};

export default AcademicsContainer;
