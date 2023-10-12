import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Faq from "../Components/Faq";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  return (
    <Box >
      <Container sx={{paddingY:"60px"}}>
        <Typography
          align="center"
          sx={{
            marginTop: "100px",
            fontWeight: "bold",
            fontSize: { lg: "50px", sm: "35px", xs: "45px" },
          }}
          data-aos="fade-up"
        >
          Why choose Us.
        </Typography>
        <Grid container>
          <Grid item lg={6} mt={5} data-aos="fade-up">
            <Typography variant="h4" fontWeight="bold">
              WE DRIVE VISION INTO ACTION
            </Typography>
            <Box component="div" sx={{ marginTop: "20px" }}>
              <Faq />
            </Box>
          </Grid>

          <Grid
            item
            lg={6}
            sm={12}
            sx={{ marginTop: "40px" }}
            data-aos="fade-up"
          >
            <Typography variant="body1">
              We are providing world class services to the clients,
              understanding the clients problem from their perspective giving
              them the exact solution of their deep-rooted problems is our key
              asset. We are pioneers in understanding the specific requirements
              of businesses and provide tailor-made cost effective solutions.
            </Typography>
            <Box
              component="img"
              src="/assets/chooes.jpg"
              sx={{
                width: { lg: "75%", sm: "100%", xs: "100%" },
                marginTop: "50px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
