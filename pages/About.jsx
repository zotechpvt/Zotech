import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Faq from "../Components/Faq";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Box className="about">
      <Box component="div" className="aboutbackground">
        <Box component="div" className="contentbox" data-aos="fade-right">
          <Typography variant="h3" className="contentheading1">
            All You Need to Know About Us
          </Typography>
          <Typography variant="h1" className="contentheading2">
            We Converted Our Ideas into Reality with Powerful Technologies.
          </Typography>
        </Box>
      </Box>

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

        <Grid container mt={5}>
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
              grow in the tech industry, this company passionately in 2012 with
              a small team of employees providing web designing as primary
              service. With their untiring energy and allegiance towards the
              work, in a couple of years, the company witnessed a roaring
              success and growth. We have now grown to a workforce of over 80+
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
              Our company grew leaps and bounds with over 1250+ successful
              projects till date. For more than a decade, we have been
              delivering software development solutions and empowering
              businesses around the world to enrich human lives with tech
              utility by reaching tech business goals year over year. We take
              immense pleasure to say that 70% of our business comes from
              existing clients. Our clients choose us time and time again as
              they trust us to deliver impeccable solutions that meet their
              specific business requirements. Needless to say, transparency in
              our business deal has been our greatest strength.
            </Typography>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box
              component="img"
              data-aos="zoom-in"
              className="startedimage"
              // sx={{ marginLeft: { lg: "100px" } }}
              src="/assets/grew.jpg"
            />
          </Grid>
        </Grid>
        <p
          align="center"
          className="stylediv"
          // style={{
          //   marginTop: "100px",
          //   marginBottom: "100px",
          //   padding: "10px",
          //   borderRadius: "10px",
          //   backgroundColor: "lightblue",
          //   color: "black",
          // }}
          data-aos="zoom-out"
        >
          We believe that passion and enthusiasm driven work inherits quality
          and stability all by itself. Rest assured, your project is in good
          hands and it will be delivered with the quality and ease that you
          expect.
        </p>
      </Container>

      <Container className="missioncontainer">
        <Grid container mt={5} spacing={1}>
          <Grid item lg={6} sm={12} data-aos="fade-up">
            <Box
              component="img"
              className="missionimage"
              src="/assets/mission.jpg"
            />

            <Typography
              variant="h5"
              fontWeight="bold"
              className="visionheading"
            >
              Our Mission
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              className="visionheading"
            >
              Stay Ahead Of The Technology Curve!
            </Typography>
            <Typography variant="body1">
              Innovate and strive towards providing expert solution by
              incorporating all the latest technologies to provide cost
              effective IT solutions. We Envision to empower the society through
              a wide range of quality oriented services and deliver value based
              solutions which keep our clients at the pinnacle of growth.
            </Typography>
          </Grid>
          <Grid item lg={6} sm={12}>
            <Box
              component="img"
              className="visionimage"
              data-aos="fade-up"
              src="/assets/vision.jpg"
            />

            <Typography
              variant="h5"
              fontWeight="bold"
              className="visionheading"
            >
              Our Vision
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              className="visionheading"
            >
              Achieve 100% Customer Satisfaction!
            </Typography>
            <Typography variant="body1">
              Our attention to detail and quality is unmatched in the industry.
              We’re not just a resource provider. We value our customers’
              success as much as our own – sharing development risk, so that
              they can be bold in their adoption of new technologies.
            </Typography>
            <Typography variant="body1" mt={1}>
              Our core values play an important part in who we are as a company.
              We aim to achieve 100% customer satisfaction whilst providing IT
              services adhering to the highest security and practices quality.
              We want to achieve this by ensuring that our employees feel
              inspired and excited to work on every new project.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container>
        <Typography
          variant="h3"
          align="center"
          sx={{ marginTop: "50px", fontWeight: "bold" }}
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
            sx={{ marginTop: "10px" }}
            data-aos="fade-up"
          >
            <Typography variant="body1">
              We are providing world class services to the clients,
              understanding the client's problem from their perspective giving
              them the exact solution of their deep-rooted problems is our key
              asset. We are pioneers in understanding the specific requirements
              of businesses and provide tailor-made cost effective solutions.
              Innovative customer centric processes and proactive strategies
              have helped us earn the trust and respect in the technology world.
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

export default About;
