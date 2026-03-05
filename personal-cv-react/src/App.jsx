import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const education = [
    {
      year: "2018",
      program: "Student",
      school: "NORTH CITY CENTRAL SCHOOL"
    },
    {
      year: "2020",
      program: "REGULAR",
      school: "HIGHSCHOOL"
    },
    {
      year: "2023",
      program: "STEM",
      school: "PHINMA COC"
    },
    {
      year: "2026",
      program: "BS information Technology",
      school: "USTP"
    }




  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <button className="toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? "Toogle to Light Mode" : "Toogle to Dark Mode"}
      </button>

      <header>
        <h1>My Personal Online CV</h1>
      </header>

      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />

    </div>
  );
}

export default App;