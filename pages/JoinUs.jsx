import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
  } from "@mui/material";
  import { Box, Container } from "@mui/system";
  import { careerContent, cardCareer, careerPerk } from "../Static/Utils";
  import React, { useEffect } from "react";
  import EmpForm from "../Components/EmpForm";
  import AOS from "aos";
  import "aos/dist/aos.css";

const JoinUs = () => {
  return (
    <Box sx={{paddingY:"50px"}}>
       <Container>
        <Typography
          variant="h3"
          color="black"
          align="center"
          mt={5}
          data-aos="fade-up"
        >
          Join Us
        </Typography>
        {careerContent.map((e, index) => {
          return (
            <Typography
              variant="body1"
              align="left"
              data-aos="fade-up"
              mt={3}
              key={index}
            >
              {e.text}
            </Typography>
          );
        })}
      </Container>
    </Box>
  )
}

export default JoinUs
