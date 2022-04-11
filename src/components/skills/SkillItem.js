import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import React from "react";
import { Fade } from "react-reveal";

const SkillItem = (props) => {
  
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0.5),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    borderBottom: `3px solid ${theme.palette.text.secondary}`,    
  }));

  const SkillData = styled("span")({    
    display: 'flex',    
    alignItems: "center",
    transition: "0.3s",
    ":hover": {
      transform: "scale(1.2)",
    },
  });

  const BoxIcon = styled("i")({
    fontSize: "2rem",
    marginRight: "0.5rem",
  });

  return (
    <Grid item xs={12} sm={6}>
      <Fade top duration={2000}>
      <Item>
        <SkillData>
          <BoxIcon className={props.code}></BoxIcon>
          <span>{props.text}</span>        
          </SkillData>
      </Item>
      </Fade>
    </Grid>
  );
};

export default SkillItem;
