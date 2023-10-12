import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import EmpForm from "../Components/EmpForm";
import AOS from "aos";
import "aos/dist/aos.css";
import JoinUs from "./JoinUs";
import CurrentOpportunities from "./CurrentOpportunities";
import PerksOfJoining from "./PerksOfJoining";
import SEO from "../next-seo.config";

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <SEO
        title="Career - Zotech"
        description="Career with us and grow your self with zotech"
        canonical="https://yourwebsite.com/Career"
        openGraph={{
          title: "Career",
        }}
      />
      <Box className="career">
        <Box component="div" className="careerbackground">
          <Box component="div" className="contentbox" data-aos="fade-right">
            <Typography className="contentheading1">
              If You’ve Got Powerful Skills,
            </Typography>
            <Typography className="contentheading2">
              We Have a Place For You To Shine!
            </Typography>
          </Box>
        </Box>

        <JoinUs />

        <CurrentOpportunities />

        <EmpForm />

        <PerksOfJoining />
      </Box>
    </>
  );
};

export default Career;
