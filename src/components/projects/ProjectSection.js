import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Section from "../section/Section";
import ProjectItem from "./ProjectItem";
import movieImage from "../../images/movie-app.gif";
import seinfeldImage from "../../images/kramer.jpeg";
import quizImage from "../../images/quiz-ss.png";
import twitterImage from "../../images/twitterbot-ss.png";
import superchatImage from "../../images/superchat-ss.png";
import pyPongImage from "../../images/pong-ss.png";

const ProjectSection = () => {
  const projectsData = [
    {
      id: "movies",
      link: "https://github.com/michael-pena/flask-top-10-movies",
      img: movieImage,
    },
    {
      id: "seinfeld",
      link: "https://github.com/michael-pena/Seinfield-Motion-Sensor",
      img: seinfeldImage,
    },
    {
      id: "quizapp",
      link: "https://github.com/michael-pena/Video-Game-Quiz-App",
      img: quizImage,
    },
    {
      id: "superchat",
      link: "https://github.com/michael-pena/SuperChat",
      img: superchatImage,
    },
    {
      id: "twitterbot",
      link: "https://github.com/michael-pena/Twitter-ISP-Bot",
      img: twitterImage,
    },
    {
      id: "pypong",
      link: "https://github.com/michael-pena/pyPong",
      img: pyPongImage,
    },
  ];

  return (
    <Section title="Projects">
      <Grid container rowSpacing={{xs: 2, m:3}} columnSpacing={{xs: 2, m:3}}>
        {projectsData.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.id}
            link={item.link}
            img={item.img}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectSection;
