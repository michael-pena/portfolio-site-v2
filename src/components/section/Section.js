import React from "react";
import { styled } from "@mui/material/styles";
import SectionTitle from "./SectionTitle";
import { Fade } from "react-reveal";

const Underline = styled("div")({
  borderTop: "4px solid",
  margin: "0 auto",
  marginBottom: "2.5rem",
  width: "70px",
});

const Section = (props) => {
  return (
    <section id={props.title.toLowerCase()} className="section bd-grid">
      <Fade left duration={1000} distance="70px">
        <SectionTitle title={props.title} />
        <Underline></Underline>
      </Fade>
      {props.children}
    </section>
  );
};

export default Section;
