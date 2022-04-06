import { Grid } from "@mui/material";
import React from "react";
import SkillItem from "./SkillItem";
import Section from "../section/Section";

const skillList = [
  {
    id: "html5",
    code: "bx bxl-html5",
    text: "HTML5",
  },
  {
    id: "css3",
    code: "bx bxl-css3",
    text: "CSS",
  },
  {
    id: "bootstrap",
    code: "bx bxl-bootstrap",
    text: "Bootstrap",
  },
  {
    id: "javascript",
    code: "bx bxl-javascript",
    text: "JavaScript",
  },
  {
    id: "jquer",
    code: "bx bxl-jquery",
    text: "jQuery",
  },
  {
    id: "nodejs",
    code: "bx bxl-nodejs",
    text: "Node.js",
  },
  {
    id: "react",
    code: "bx bxl-react",
    text: "React",
  },
  {
    id: "redux",
    code: "bx bxl-redux",
    text: "Redux",
  },
  {
    id: "python",
    code: "bx bxl-python",
    text: "Python",
  },
  {
    id: "flask",
    code: "bx bxl-flask",
    text: "Flask",
  },
  {
    id: "java",
    code: "bx bxl-java",
    text: "Java",
  },
  {
    id: "spring-boot",
    code: "bx bxl-spring-boot",
    text: "Spring Boot",
  },
  {
    id: "php",
    code: "bx bxl-php",
    text: "PHP",
  },
  {
    id: "aws",
    code: "bx bxl-aws",
    text: "AWS",
  },
  {
    id: "docker",
    code: "bx bxl-docker",
    text: "Docker",
  },
  {
    id: "kubernetes",
    code: "bx bxl-kubernetes",
    text: "Kubernetes",
  },
  {
    id: "git",
    code: "bx bxl-git",
    text: "Git",
  },
  {
    id: "gitlab",
    code: "bx bxl-gitlab",
    text: "GitLab",
  },
  {
    id: "visualstudio",
    code: "bx bxl-visual-studio",
    text: "Visual Studio Code",
  },
  {
    id: "firebase",
    code: "bx bxl-firebase",
    text: "Firebase",
  },
  {
    id: "mysql",
    code: "bx bx-data",
    text: "MySQL",
  },
  {
    id: "mongodb",
    code: "bx bx-data",
    text: "MongoDB",
  }  
];

const SkillSection = () => {
  return (
    <Section id="skills" title="Skills">            
        <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 2 }}>
          {skillList.map((skill) => (
            <SkillItem key={skill.id} code={skill.code} text={skill.text} />
          ))}
        </Grid>      
    </Section>
  );
};

export default SkillSection;
