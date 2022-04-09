import React, { useState } from "react";
import Section from "../section/Section";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, ValidationError } from "@formspree/react";

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
  const [state, handleSubmit] = useForm("xbjwzljn");
  if (state.succeeded) {
    console.log("email sent!")
  }
  return (
    <Section title="Contact">
      <ContactForm>
        <form onSubmit={handleSubmit}>
          <ContactField
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="filled"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
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
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <ContactSubmitButton variant="contained" type="submit" disabled={state.submitting}>
            Submit
          </ContactSubmitButton>
        </form>
      </ContactForm>
    </Section>
  );
};

export default ContactSection;
