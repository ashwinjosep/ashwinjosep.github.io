import React from "react";
import { Link } from "react-router-dom";
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
  onThemeSwitch: any;
  theme: string;
}

const Header = (props: HeaderProps) => {
  const minWidth = 480;
  const { width } = useDimensions();

  return (
    <div className="header">
      {width > minWidth ? (
        <div className="header-links">
          <Link className="nav-link active mr-10" to="/">
            Home
          </Link>
          <Link className="nav-link mr-10" to="/experience">
            Experience
          </Link>
          <Link className="nav-link" to="/academics">
            Academics
          </Link>
        </div>
      ) : (
        <div className="header-links">
          <Link className="nav-link mr-10" to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link className="nav-link mr-10" to="/experience">
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
          <Link className="nav-link" to="/academics">
            <FontAwesomeIcon icon={faGraduationCap} />
          </Link>
        </div>
      )}

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
