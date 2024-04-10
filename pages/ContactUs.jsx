import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import Form from "../Components/Form";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { testimonials } from "../Static/Utils";
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from "../next-seo.config"

const Contactus = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>

      <Box component="div" className="contactbackground">
        <Box component="div" className="contentbox" data-aos="fade-right">
          <Typography className="contentheading1">
            Want to inquire more about us?
          </Typography>
          <Typography className="contentheading2">
            Let’s discuss the details about your dream project.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ paddingY: "60px" }}>
        <Typography variant="h4" align="center" mt={5} data-aos="fade-up">
          We appreciate your impact!
        </Typography>
        <Typography variant="h4" align="center" data-aos="fade-up">
          Talk in details about your project with us.
        </Typography>

        <Container sx={{ paddingY: "30px" }}>
          <Grid container >
            <Grid item lg={8} data-aos="zoom-in">
              <Form />
            </Grid>

            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "0px",
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                sx={{ marginTop: "50px" }}
              >
                Contact Details
              </Typography>
              <Typography variant="h6" display="flex" mt={5}>
                <LocationOnIcon />
                <span style={{ marginLeft: "10px" }}>
                  319, Prime Shoppers, Vesu, Surat,Gujarat 395007
                </span>
              </Typography>
              <Typography variant="h6" display="flex" mt={5}>
                <PhoneIcon />
                <span style={{ marginLeft: "10px" }}>+91 9512596662</span>
              </Typography>
              <Typography variant="h6" display="flex" mt={5}>
                <EmailIcon />
                <span style={{ marginLeft: "10px" }}>info@zotech.in</span>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ paddingY: "60px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1143380763037!2d72.76382171485646!3d21.147847585934027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d52f109ff77%3A0x4e31edf2a8b2318b!2sPrime%20shoppers!5e0!3m2!1sen!2sin!4v1671450794567!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default Contactus;
