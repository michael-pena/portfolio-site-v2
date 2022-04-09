import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ProjectCard = styled(Card)({
  transition: "0.7s",
  ":hover": {
    transform: "scale(1.1)",
  },
});

const ProjectItem = (props) => {
  return (
    <Grid item xs={12} sm={4}>
      <ProjectCard href={props.link}>
        <Typography backgroundColor="transparent" variant="h5">{props.title}</Typography>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          title={props.id}
        />
      </ProjectCard>
    </Grid>
  );
};

export default ProjectItem;
