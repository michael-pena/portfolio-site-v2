import "./App.css";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import ButtonAppBar from "./components/header/ButtonAppBar";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/projects/ProjectSection";
import Skills from "./components/skills/SkillSection";

function App() {  

  return (
    <div className="App">  
      <ButtonAppBar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectSection />
      <ContactSection />
    </div>
  );
}

export default App;