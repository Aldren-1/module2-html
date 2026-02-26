import { useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button className="toggle-btn" onClick={handleToggle}>
        {darkMode ? "Toogle to Light Mode" : "Toogle to Dark Mode"}
      </button>

      <header>
        <h1>My Personal Online CV</h1>
      </header>

      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;