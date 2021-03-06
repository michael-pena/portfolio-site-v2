import React from "react";
import Section from "../section/Section";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Typewriter from "typewriter-effect";
import svgImage from "../../images/undraw_programming.svg";
import { Fade } from "react-reveal";

const BoxIcon = styled("i")({
  marginRight: "1rem",
});

const NameIcon = styled("i")({
  fontSize: "1.3rem",
  marginLeft: "0.3rem",
});

const TypewriterSection = styled("span")({
  display: "flex",
  alignItems: "center",
  marginBottom: "-1rem",
  p: {
    marginRight: "5px",
  },
});

const LocationWrapper = styled("span")({
  marginTop: "1.5rem",
  display: "flex",
  alignItems: "center",
  borderTop: "1px solid white",
  width: "70%",
});

const LocationIcon = styled("i")({
  marginRight: "5px",
});

const SVGImageSection = styled("div")({
  display: "flex",
  justifyContent: "center", 
});

const AboutSection = () => {
  return (
    <Section id="About" title="About">
      <Fade duration={3000}>
      <Grid container rowSpacing={1} columnSpacing={{ sm: 2, md: 2 }}>        
        <Grid item xs={12} sm={6} className="about-text">
          <Typography variant="h5">Who am I?</Typography>
          <p>
            I'm Michael <NameIcon className="bx bxs-ghost"></NameIcon>
          </p>
          <TypewriterSection>
            <p>
              <BoxIcon className="bx bx-caret-right"></BoxIcon>I like{" "}
            </p>
            <Typewriter
              options={{
                strings: [
                  "doing full stack development.",
                  "to solve interesting problems.",
                  "to learn new things.",
                  "collaborating with others.",
                  "trying new solutions.",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                delay: 100,
              }}
            />
          </TypewriterSection>
          <p>
            <BoxIcon className="bx bx-caret-right"></BoxIcon> I'm a full stack
            developer with experience in InfoSec.
          </p>
          <p>
            <BoxIcon className="bx bx-caret-right"></BoxIcon> When I'm not doing
            CTFs, you can find me working with JavaScript (ES6+), React.js,
            Node.js, Python, and Java.
          </p>
          <p><BoxIcon className="bx bx-caret-right"></BoxIcon> I also like to tinker with the Raspberry Pi using Python's GPIO library.</p>
          <p>
            Since 2016 - I've spent my time breaking and building things. This
            has led to me working on some amazing projects, worked at some
            amazing places, and worked with some great engineers.
          </p>
          <LocationWrapper>
            <p>
              <LocationIcon
                className="bx bxs-map"              
              ></LocationIcon>
              Dallas-Fort Worth, TX
            </p>
          </LocationWrapper>
        </Grid>                
        <Grid item xs={12} sm={6} alignSelf="center">
          <SVGImageSection>
            <img src={svgImage} alt="programming svg" width="80%" />
          </SVGImageSection>
        </Grid>
      </Grid>
      </Fade>
    </Section>
  );
};

export default AboutSection;
