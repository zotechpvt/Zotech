import {
    Typography,
  } from "@mui/material";
  import { Box, Container } from "@mui/system";
  import { careerPerk } from "../Static/Utils";
  import React from "react";
  import "aos/dist/aos.css";
  
  const PerksOfJoining = () => {
    return (
      <Box sx={{ paddingY: "60px" }}>
        <Container>
          <Typography
            variant="h4"
            align="center"
            sx={{ marginTop: "50px" }}
            data-aos="fade-up"
          >
            PERKS OF JOINING
          </Typography>
          <Typography variant="body1" align="left" mt={4} data-aos="fade-up">
            Yes, work is important and so is work-life balance! When one can
            achieve higher productivity under a calmer state of mind than under
            pressure, what’s better than a piece of incredible work delivered
            then. Thus, we regularly conduct employee engagement activities to
            build stronger bonds between the team members. We entertain and
            empower each other throughout the day’s hustle. So if you are looking
            for someone who can be a helping hand in building an effective career
            experience and great professional growth, you’ve landed right. This is
            the place for you!
          </Typography>
          <Typography variant="h6" align="left" mt={5} data-aos="fade-up">
            7 REMARKABLE REASONS to Join Zotech Pvt. Ltd.
          </Typography>
          {careerPerk.map((e, index) => {
            return (
              <Typography
                variant="body1"
                className={index % 2 === 0 ? "left-align" : "right-align"} 
                mt={2}
                key={index}
                data-aos="fade-up"
              >
                {e.text}
              </Typography>
            );
          })}
        </Container>
      </Box>
    );
  };
  
  export default PerksOfJoining;
  