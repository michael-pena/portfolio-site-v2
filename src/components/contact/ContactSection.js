import React from "react";
import Section from "../section/Section";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
  "& .MuiInput-underline:after": {
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
        <form
          action="https://formspree.io/f/xbjwzljn"
          method="POST"
          encType="multipart/form-data"
        >
          <ContactField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="filled"
            required
          />

          <ContactField
            id="message"
            name="message"
            label="Message"
            type="text"
            variant="filled"
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
