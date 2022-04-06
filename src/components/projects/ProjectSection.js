import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Section from "../section/Section";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  const projectsData = [
    {
      id: "movies",
      link: "https://github.com/michael-pena/flask-top-10-movies",
      img: "",
    },
    {
      id: "seinfeld",
      link: "https://github.com/michael-pena/Seinfield-Motion-Sensor",
      img: "",
    },
    {
      id: "quizapp",
      link: "https://github.com/michael-pena/Video-Game-Quiz-App",
      img: "",
    },
    {
      id: "superchat",
      link: "https://github.com/michael-pena/SuperChat",
      img: "",
    },
    {
      id: "twitterbot",
      link: "https://github.com/michael-pena/Twitter-ISP-Bot",
      img: "",
    },
    {
      id: "pypong",
      link: "https://github.com/michael-pena/pyPong",
      img: "",
    },
  ];

  return (
    <Section title="Projects">
      <Grid container spacing={2}>
        <ul>
          {projectsData.map((item) => (
            <ProjectItem key={item.id} title={item.id} link={item.link} img={item.img} />
          ))}
        </ul>
      </Grid>
    </Section>
  );
};

export default ProjectSection;
