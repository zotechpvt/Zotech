import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Drawer1 from "./Drawer";
import { navbar } from "../Static/Utils";
import Link from "next/link";
export default function Navbar() {
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    setOpen(!open);
  };

  const navRef = React.useRef();
  navRef.current = color;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Drawer1 open={open} setOpen={setOpen} />

      <AppBar
        component="nav"
        id="nav"
        sx={{
          backgroundColor: color ? "#1c1c1c" : "transparent",

          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          padding: "10px",
        }}
      >
        <Container>
          <Toolbar
            sx={{ justifyItems: "center", justifyContent: "space-between" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <img
                src="/assets/Zotech - Logo - Horizontal - White with Transparent BG.png"
                width={130}
                height={50}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                marginLeft: "auto",
              }}
            >
              {navbar.map((e, index) => (
                <Link
                  href={e.path}
                  style={{ textDecoration: "none" }}
                  key={index}
                >
                  <Button
                    sx={{
                      marginLeft: "10px",
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        borderBottom: "2px solid white",
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {e.name}
                  </Button>
                </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
