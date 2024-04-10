import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Services from "../Components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../next-seo.config"

const Home1 = () => {


  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>

      <SEO
        title="Home - Zotech"
        description="Zotech Home page"
        canonical="https://yourwebsite.com/Home"
        openGraph={{
          title: "Home",
        }}
      />
      <Box component="div" className="homebackground">
        <Box component="div" className="contentbox" data-aos="fade-right">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography className="contentheading1">
              We are Software & Co-Working Space Company.
            </Typography>
            <Typography variant="h1" className="contentheading2"></Typography>
            <Typography variant="body1" className="headingtext">
              We Make Sure Best Business Solution For Our Client & Customer
            </Typography>
          </Box>
          <Button
            href="/ContactUs"
            variant="outlined"
            size="large"
            className="homebutton"
          >
            Contact Now
          </Button>
        </Box>
      </Box>
      <Services />
    </>
  );
};

export default Home1;
