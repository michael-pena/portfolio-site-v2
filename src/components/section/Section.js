import React from "react";
import { styled } from "@mui/material/styles";
import SectionTitle from "./SectionTitle";

const Underline = styled("div")({
  borderTop: "4px solid",
  margin: "0 auto",
  marginBottom: "2.5rem",
  width: "70px",
});

const Section = (props) => {
  return (
    <section id={props.title.toLowerCase()} className="section bd-grid">
      <SectionTitle title={props.title} />
      <Underline></Underline>
      {props.children}
    </section>
  );
};

export default Section;
