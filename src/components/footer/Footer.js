import { Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import SocialMedia from "../socialmedia/SocialMedia";

const FooterSection = () => {
    const currentYear = new Date().getFullYear();
    
    const Footer = styled("footer")(({ theme }) => ({
        textAlign: "center",
        marginTop: "6rem",
        backgroundColor: theme.palette.action.disabledBackground
      }));

    return (
        <Footer>
            <SocialMedia />
            <Typography variant="p">&copy; {currentYear} Michael Pena All Rights Reserved</Typography> 
        </Footer>
    );
};

export default FooterSection;