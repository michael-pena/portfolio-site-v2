import React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardContent } from "@mui/material";

const ProjectCard = styled(Card)({
  transition: "0.7s",
  position: "relative", 
  ":hover": {
    transform: "scale(1.1)",
  },
});

const CardText = styled(CardContent)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.54)',
});


const ProjectItem = (props) => {
  return (
    <Grid item xs={12} sm={4}>
      <a href={props.link}>
      <ProjectCard href={props.link}>        
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          title={props.title}
        />
        <CardText>
          <Typography variant="p">
            {props.title}
            </Typography>       
        </CardText>
      </ProjectCard>
      </a>
    </Grid>
  );
};

export default ProjectItem;
