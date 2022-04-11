import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";
import Typewriter from "typewriter-effect";
import { styled } from "@mui/material/styles";
import profilepicture from "../../images/linkedin-profile.jpg";
import SocialMedia from "../socialmedia/SocialMedia";
import ParticlesArea from "./ParticlesArea";
import { Fade } from "react-reveal";


const SocialIcon = styled("a")(({ theme }) => ({
  width: "max-content",
  fontSize: "1.75rem",
  color: theme.palette.text.primary,
  marginRight: "2rem",
  ":hover": {
    color: theme.palette.text.secondary,
  },
}));

const BorderedAvatar = styled(Avatar)(({ theme }) => ({
  marginTop: "2rem",
  width: "16rem",
  height: "16rem",
  border: `4px solid ${theme.palette.text.secondary}`,
}));

const HomeDataSection = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  justifyItems: "center",
  alignItems: "center",
  position: "relative",
});

const HeroSection = () => {


  return (
    <React.Fragment>
      <div className="particles">
        <ParticlesArea />
      </div>
      <section id="home" className="home bd-grid">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          columnSpacing={{ sm: 2, md: 2 }}
        >
          <Grid item xs={12} sm={6}>
            <Fade top duration={2000}>
            <HomeDataSection>
              <BorderedAvatar alt="Michael Pena" src={profilepicture} />
            </HomeDataSection>
            <HomeDataSection>
              <Typography variant="h3" marginTop="3rem">
                Hi, I'm Michael Pena
              </Typography>
            </HomeDataSection>
            <HomeDataSection>
              <Typography variant="h4">
                <Typewriter
                  options={{
                    strings: [
                      " Software Developer",
                      " JavaScript Developer",
                      " React Developer",
                      " Node.js Developer",
                      " Python Developer",
                      " Java Developer",
                      " Backend Developer",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                    delay: 100,
                  }}
                />
              </Typography>
            </HomeDataSection>
            <SocialMedia />
            </Fade>
          </Grid>
        </Grid>
      </section>
    </React.Fragment>
  );
};

export default HeroSection;
