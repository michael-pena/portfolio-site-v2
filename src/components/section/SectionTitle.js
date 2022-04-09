import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";


const Title = styled(Typography)(({ theme }) => ({    
    margin: "auto",
    marginTop: "7rem",
    textAlign: "center",
  }));


  const SectionTitle = (props) => {
      return (
          <Title variant="h4">{props.title}</Title>
      );      
  };

  export default SectionTitle;