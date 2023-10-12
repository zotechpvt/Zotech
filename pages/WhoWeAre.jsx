import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "aos/dist/aos.css";
const WhoWeAre = () => {
  return (
    <Box sx={{paddingTop:"60px"}}>
      <Container className="startedcontainer">
        <Typography
          variant="h3"
          color="black"
          align="center"
          fontWeight="bold"
          mt={5}
          data-aos="fade-up"
          className="tittle"
        >
          Who We Are
        </Typography>
        <Typography align="center" fontWeight="bold" mt={2} data-aos="fade-up">
          Delivering The Best Software Solutions With Trusted Quality Product
          Worldwide.
        </Typography>

        <Grid container sx={{paddingTop:"50px"}}>
          <Grid item lg={6} sm={12}>
            <Box
              component="img"
              data-aos="zoom-in"
              className="startedimage"
              src="/assets/started.jpg"
            />
          </Grid>
          <Grid item lg={6} xs={12} data-aos="fade-up">
            <Typography variant="h4" className="startedheading">
              How We Started
            </Typography>
            <Typography variant="body1" className="startedcontent">
              Zotech Solution Pvt. Ltd. is one of the most trusted Software
              development companies of India today. With a futuristic vision to
              grow in the tech industry, this company passionately in 2021 with
              a small team of employees providing web developing as primary
              service. With their untiring energy and allegiance towards the
              work, in a couple of years, the company witnessed a roaring
              success and growth. We have now grown to a workforce of
              action-driven team members and offering a wide range of services
              such as Mobile Application Development (Android & iOS), Website
              Development (Custom, ECommerce, etc.), Custom Software
              Development, Desktop Application Development, CMS Development,
              Game Development, ERP Solutions, FinTech Solutions, Blockchain
              Solutions and almost everything under the hood of computing and
              communication technology.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5} sx={{ marginTop: "100px" }}>
          <Grid item lg={6} xs={12} data-aos="fade-up">
            <Typography variant="h4" className="startedheading">
              How We Grew
            </Typography>
            <Typography variant="body1" className="startedcontent">
              Our company grew leaps and bounds with over 5+ successful projects
              till date. we have been delivering software development solutions
              and empowering businesses around the world to enrich human lives
              with tech utility by reaching tech business goals year over year.
              We take immense pleasure to say that 70% of our business comes
              from existing clients. Our clients choose us time and time again
              as they trust us to deliver impeccable solutions that meet their
              specific business requirements. Needless to say, transparency in
              our business deal has been our greatest strength.
            </Typography>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box
              component="img"
              data-aos="zoom-in"
              className="startedimage"
              src="/assets/grew.jpg"
            />
          </Grid>
        </Grid>
        <p align="center" className="stylediv" data-aos="zoom-out">
          We believe that passion and enthusiasm driven work inherits quality
          and stability all by itself. Rest assured, your project is in good
          hands and it will be delivered with the quality and ease that you
          expect.
        </p>
      </Container>
    </Box>
  );
};

export default WhoWeAre;
