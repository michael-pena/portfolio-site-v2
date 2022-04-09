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
      title: "Top 10 Movies App"
    },
    {
      id: "seinfeld",
      link: "https://github.com/michael-pena/Seinfield-Motion-Sensor",
      img: seinfeldImage,
      title: "Seinfeld Motion Sensor",
    },
    {
      id: "quizapp",
      link: "https://github.com/michael-pena/Video-Game-Quiz-App",
      img: quizImage,
      title: "Video Game Quiz App",
    },
    {
      id: "superchat",
      link: "https://github.com/michael-pena/SuperChat",
      img: superchatImage,
      title: "Super Chat",
    },
    {
      id: "twitterbot",
      link: "https://github.com/michael-pena/Twitter-ISP-Bot",
      img: twitterImage,
      title: "ISP Twitterbot",
    },
    {
      id: "pypong",
      link: "https://github.com/michael-pena/pyPong",
      img: pyPongImage,
      title: "PyPong"
    },
  ];

  return (
    <Section title="Projects">
      <Grid container rowSpacing={{xs: 2, m:3}} columnSpacing={{xs: 2, m:3}}>
        {projectsData.map((item) => (
          <ProjectItem
            key={item.id}
            title={item.title}
            link={item.link}
            img={item.img}
          />
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectSection;
