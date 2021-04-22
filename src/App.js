import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ExperienceContainer from "./pages/Experience/ExperienceContainer";
import HomeContainer from "./pages/Home/HomeContainer";
import ErrorContainer from "./pages/Error/ErrorContainer";
import AcademicsContainer from "./pages/Academics/AcademicsContainer";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  const [theme, setTheme] = useState("dark");

  const onThemeSwitch = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <BrowserRouter>
      <div className={`app ${theme}-theme`}>
        <Header onThemeSwitch={onThemeSwitch} theme={theme} />
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/experience" exact component={ExperienceContainer} />
          <Route path="/academics" exact component={AcademicsContainer} />
          <Route exact component={ErrorContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
