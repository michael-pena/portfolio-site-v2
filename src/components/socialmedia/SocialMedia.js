import React from "react";
import { styled } from "@mui/material/styles";

const SocialMediaSection = styled("div")({
  display: "flex",
  justifyContent: "space-evenly",
  justifyItems: "center",
  alignItems: "center",
  position: "relative",
});

const SocialIcon = styled("a")(({ theme }) => ({
  width: "max-content",
  fontSize: "1.75rem",
  color: theme.palette.text.primary,
  marginRight: "2rem",
  ":hover": {
    color: theme.palette.text.secondary,
  },
}));

const SocialMedia = () => {
  return (
    <SocialMediaSection>
      <div className="home_social">
        <SocialIcon
          href="https://www.linkedin.com/in/michael-pena"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </SocialIcon>
        <SocialIcon
          href="https://www.github.com/michael-pena"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-github"></i>
        </SocialIcon>
      </div>
    </SocialMediaSection>
  );
};

export default SocialMedia;
