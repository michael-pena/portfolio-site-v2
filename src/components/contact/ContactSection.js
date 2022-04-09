import React from "react";
import Section from "../section/Section";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Button, TextField } from "@mui/material";
import { borderRadius, width } from "@mui/system";

const ContactForm = styled("div")(({ theme }) => ({
  margin: "0 auto 0 auto",
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
}));

const ContactField = styled(TextField)(({ theme }) => ({
  marginBottom: "1rem",
  width: "100%",
  "& label.Mui-focused": {
    color: "white",
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.action.selected,
  },
}));

const ContactSubmitButton = styled(Button)(({ theme }) => ({
  marginBottom: "1rem",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.divider,
  ":hover": {
    backgroundColor: theme.palette.action.selected,
  },
}));

const ContactSection = () => {
  return (
    <Section title="Contact">
      <ContactForm>
        <form>
          <ContactField
            variant="filled"
            label="Email"
            type="email"
            name="email"
            required
          />

          <ContactField
            variant="filled"
            label="Message"
            type="text"
            name="message"
            multiline
            rows="5"
            required
          />
          <ContactSubmitButton variant="contained" type="submit">
            Submit
          </ContactSubmitButton>
        </form>
      </ContactForm>
    </Section>
  );
};

export default ContactSection;
