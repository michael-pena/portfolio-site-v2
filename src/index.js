import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";

const font = "'Poppins', sans-serif";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    fontFamily: font,
    fontWeightLight: 300,
    fontWeightRegular: 600,
    fontWeightHeavy: 700,
  },
});

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
