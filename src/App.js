import React, { useState } from "react";
import HomeContainer from "./pages/Home/HomeContainer";
import Header from "./components/Header";
import "./styles/App.scss";
import ExperienceContainer from "./pages/Experience/ExperienceContainer";
import AcademicsContainer from "./pages/Academics/AcademicsContainer";
import Analytics from "./analytics/analytics";

function App() {
  const [theme, setTheme] = useState("dark");
  const [page, setPage] = useState("home");
  const analytics = new Analytics();

  const onPageSwitch = (selectedPage) => {
    setPage(selectedPage);
  };

  const onThemeSwitch = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const renderContent = () => {
    switch (page) {
      case "home":
        analytics.sendPageView("home");
        return <HomeContainer />;
      case "experience":
        analytics.sendPageView("experience");
        return <ExperienceContainer />;
      case "academics":
        analytics.sendPageView("academics");
        return <AcademicsContainer />;
      default:
        analytics.sendPageView("home");
        return <HomeContainer />;
    }
  };

  return (
    <div className={`app ${theme}-theme`}>
      <Header
        page={page}
        onThemeSwitch={onThemeSwitch}
        theme={theme}
        onClick={onPageSwitch}
      />
      {renderContent()}
    </div>
  );
}

export default App;
