import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/Contact.scss";

const Contact = () => {
  return (
    <div>
      <a
        className="mr-10"
        href="mailto:ashwinjosep94@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="contact-icon" icon={faAt} />
      </a>
      <a
        className="mr-10"
        href="https://github.com/ashwinjosep"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="contact-icon" icon={faGithub} />
      </a>
      <a
        className="mr-10"
        href="https://www.linkedin.com/in/ashwinjose/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="contact-icon" icon={faLinkedinIn} />
      </a>
      <a
        className="mr-10"
        href="https://www.behance.net/ashwinjosep"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon className="contact-icon" icon={faBehance} />
      </a>
    </div>
  );
};

export default Contact;
