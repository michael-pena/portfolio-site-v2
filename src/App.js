import "./App.css";
import AboutSection from "./components/about/AboutSection";
import ContactSection from "./components/contact/ContactSection";
import FooterSection from "./components/footer/Footer";
import ButtonAppBar from "./components/header/ButtonAppBar";
import HeroSection from "./components/hero/HeroSection";
import ProjectSection from "./components/projects/ProjectSection";
import Skills from "./components/skills/SkillSection";
import { styled } from "@mui/material/styles";

function App() {
  const MainApp = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    zIndex: 100000,
  }));

  return (
    <div className="App">
      <ButtonAppBar />
      <HeroSection />
      <MainApp>
        <AboutSection />
        <Skills />
        <ProjectSection />
        <ContactSection />
        <FooterSection />
      </MainApp>
    </div>
  );
}

export default App;