import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MyResume from "../../static/Michael_Pena_Resume.pdf";
import { NoEncryption } from "@mui/icons-material";

export default function ButtonAppBar() {
  const pageSections = [
    { id: "Home" },
    { id: "About" },
    { id: "Skills" },
    { id: "Projects" },
    { id: "Contact" },
  ];

  const NavLinks = styled("li")(({ theme }) => ({
    margin: "0",
    padding: "0 1rem",
    display: "inline",
    a: {
      color: theme.palette.text.primary,
      textDecoration: "none",
    },
  }));

  const ResumeButton = styled("a")(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: "none",
  }));

  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <div className="bd-grid">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <ul listStyleType="none">
                {pageSections.map((section) => (
                  <NavLinks>
                    <a href={`#${section.id.toLowerCase()}`}>{section.id}</a>
                  </NavLinks>
                ))}
              </ul>
              <ResumeButton href={MyResume}>
                <Button color="inherit" variant="outlined">
                  Resume
                </Button>
              </ResumeButton>
            </Toolbar>
          </div>
        </AppBar>
      </Box>
    </header>
  );
}
