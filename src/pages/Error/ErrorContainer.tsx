import React from "react";
import { Link } from "react-router-dom";
import "../../styles/ErrorContainer.scss";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorContainer = () => {
  return (
    <div className="page error-page d-flex">
      <h1>Looks like you're lost!</h1>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-10" />
        Go back home.
      </Link>
    </div>
  );
};

export default ErrorContainer;
