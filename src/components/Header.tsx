import React from "react";
import "../styles/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faHome,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import useDimensions from "../hooks/useDimensions";

interface HeaderProps {
  page: string;
  onThemeSwitch: any;
  theme: string;
  onClick: any;
}

const Header = (props: HeaderProps) => {
  const minWidth = 480;
  const { width } = useDimensions();

  const checkActive = (page: string) => {
    return page === props.page ? "nav-link-active" : "";
  };

  return (
    <div className="header">
      <div className="header-links">
        <button
          className={`nav-link mr-10 ${checkActive("home")}`}
          onClick={() => props.onClick("home")}
        >
          {width > minWidth ? `Home` : <FontAwesomeIcon icon={faHome} />}
        </button>
        <button
          className={`nav-link mr-10 ${checkActive("experience")}`}
          onClick={() => props.onClick("experience")}
        >
          {width > minWidth ? (
            `Experience`
          ) : (
            <FontAwesomeIcon icon={faBriefcase} />
          )}
        </button>
        <button
          className={`nav-link ${checkActive("academics")}`}
          onClick={() => props.onClick("academics")}
        >
          {width > minWidth ? (
            `Academics`
          ) : (
            <FontAwesomeIcon icon={faGraduationCap} />
          )}
        </button>
      </div>
      {props.theme === "light" ? (
        <FontAwesomeIcon
          className="theme-button"
          onClick={props.onThemeSwitch}
          icon={faMoon}
        />
      ) : (
        <FontAwesomeIcon
          className="theme-button"
          onClick={props.onThemeSwitch}
          icon={faSun}
        />
      )}
    </div>
  );
};

export default Header;
