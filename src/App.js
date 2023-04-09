import './App.css';
import '../src/Component/Header/Header.css'
import Header from "./Component/Header/Header"
import TopContainer from "./Component/TopContainer/TopContainer"
import ProjectContainer from './Component/ProjectContainer/ProjectContainer';
import { useContext } from "react";
import { themeContext } from "./Context";
import SkillContent from './Component/SkillContent/SkillContent';
import ExperienceContainer from './Component/ExperienceContainer/ExperienceContainer';
import Contact from './Component/Contact/Contact';
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
  >
        
      <Header />
      <TopContainer />
      <SkillContent />
      <ProjectContainer />
      <ExperienceContainer />
      <Contact/>
      
    </div>
  );
}

export default App;
