import { Card, CardMedia } from "@mui/material";
import React from "react";

const ProjectItem = (props) => {  
  return (
    <li>
      <a href={props.link}>
        {props.title} 
      </a>
    </li>
  );
};

export default ProjectItem;
