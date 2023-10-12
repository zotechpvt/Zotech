import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Faq from "../Components/Faq";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyChooseUs from "./WhyChooseUs";
import WhoWeAre from "./WhoWeAre";
import SEO from "../next-seo.config";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
     <SEO
        title="About Us - Zotech"
        description="About us What we are doing"
        canonical="https://yourwebsite.com/page1"
        openGraph={{
          title: "About us",
        }}
      />
      <Box className="about">
        <Box component="div" className="aboutbackground">
          <Box component="div" className="contentbox" data-aos="fade-right">
            <Typography className="contentheading1">
              All You Need to Know About Us
            </Typography>
            <Typography className="contentheading2">
              We Converted Our Ideas into Reality with Powerful Technologies.
            </Typography>
          </Box>
        </Box>

        <WhoWeAre />

        <Container className="missioncontainer">
          <Grid container spacing={1}>
            <Grid
              item
              lg={6}
              sm={12}
              mt={5}
              data-aos="fade-up"
              className="datacontainer"
            >
              <Box
                component="img"
                className="missionimage"
                src="https://static.imoney.my/articles/wp-content/uploads/2022/06/03193648/sme-business-loan-800x419.jpg"
              />

              <Box component="div">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  className="visionheading"
                  mt={3}
                >
                  Our Mission
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  className="visionheading"
                  mt={1}
                >
                  Stay Ahead Of The Technology Curve!
                </Typography>
                <Typography variant="body1" className="missiontext">
                  Innovate and strive towards providing expert solution by
                  incorporating all the latest technologies to provide cost
                  effective IT solutions. We Envision to empower the society
                  through a wide range of quality oriented services and deliver
                  value based solutions which keep our clients at the pinnacle
                  of growth.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              lg={6}
              sm={12}
              mt={5}
              data-aos="fade-up"
              className="datacontainer"
            >
              <Box
                component="img"
                className="missionimage"
                src="/assets/vision.jpg"
              />
              <Box component="div">
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  className="visionheading"
                  mt={3}
                >
                  Our Vision
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  mt={1}
                  className="visionheading"
                >
                  Achieve 100% Customer Satisfaction!
                </Typography>
                <Typography variant="body1" className="missiontext">
                  Our attention to detail and quality is unmatched in the
                  industry. We’re not just a resource provider. We value our
                  customers’ success as much as our own – sharing development
                  risk, so that they can be bold in their adoption of new
                  technologies.
                </Typography>
                <Typography variant="body1" mt={1} className="missiontext">
                  Our core values play an important part in who we are as a
                  company. We aim to achieve 100% customer satisfaction whilst
                  providing IT services adhering to the highest security and
                  practices quality. We want to achieve this by ensuring that
                  our employees feel inspired and excited to work on every new
                  project.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <WhyChooseUs />
      </Box>
    </>
  );
};

export default About;
