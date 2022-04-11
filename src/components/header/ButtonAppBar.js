import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import MyResume from "../../static/Michael_Pena_Resume.pdf";

export default function ButtonAppBar() {
  const pageSections = [
    { id: "Home" },
    { id: "About" },
    { id: "Skills" },
    { id: "Projects" },
    { id: "Contact" },
  ];

  const NavLinks = styled("a")(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: "none",

  }));

  const NavListItem = styled("li")(({ theme }) => ({
    color: theme.palette.text.primary,
    listStyleType: "none",
    margin: "0",
    padding: "0 1rem",
    display: "inline",
  }));

  const ResumeButton = styled("a")(({ theme }) => ({
    color: theme.palette.text.secondary,
    textDecoration: "none",
  }));

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar position="fixed">
        <div className="bd-grid">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pageSections.map((page) => (
                  <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <NavLinks href={`#${page.id.toLowerCase()}`}>
                      {page.id}
                    </NavLinks>
                  </MenuItem>
                ))}
                <ResumeButton>
                  <Button variant="outlined" color="inherit">
                    Resume
                  </Button>
                </ResumeButton>
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              MP
            </Typography>


            <Typography
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}
            >
              MP
            </Typography>
            <Box
              sx={{
                display: { xs: "none", md: "inline" },
              }}
            >
              <ul>
                {pageSections.map((page) => (
                  <NavListItem key={page.id}>
                    <NavLinks href={`#${page.id.toLowerCase()}`}>
                      {page.id}
                    </NavLinks>
                  </NavListItem>
                ))}
              </ul>
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "inline" },
              }}
            >
              <ResumeButton href={MyResume}>
                <Button variant="outlined" color="inherit">
                  Resume
                </Button>
              </ResumeButton>
            </Box>
          </Toolbar>
        </Container>
        </div>
      </AppBar>
    </header>
  );
}
