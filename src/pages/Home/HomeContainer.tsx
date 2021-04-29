import React from "react";
import Contact from "../../components/Contact";
import "../../styles/HomeContainer.scss";

const HomeContainer = () => {
  return (
    <div>
      <div className="page home-page d-flex justify-content-center flex-wrap">
        <p>Hi there!</p>
        <img src="/assets/me.jpg" className="portrait" alt="my portrait" />
        <h1>I'm Ashwin Jose Poruthukaran</h1>
        <p>
          I'm a full-stack software developer who occasionally indulges in
          graphic design.
        </p>
        <Contact />
      </div>
    </div>
  );
};

export default HomeContainer;
