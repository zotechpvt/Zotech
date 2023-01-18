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
import EmpForm from "../Components/Empform";
import AOS from "aos";
import "aos/dist/aos.css";

const Career = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <Box className="career">
      <Box component="div" className="careerbackground">
        <Box component="div" className="contentbox" data-aos="fade-right">
          <Typography variant="h3" className="contentheading1">
            If You’ve Got Powerful Skills,
          </Typography>
          <Typography variant="h1" className="contentheading2">
            We Have a Place For You To Shine!
          </Typography>
        </Box>
      </Box>

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

      <Box
        bgcolor={`#f0f4f6`}
        sx={{
          height: { lg: "800px", md: "1300px", sm: "1300px", xs: "1700px" },
          marginTop: "30px",
        }}
      >
        <Container>
          <Typography
            variant="h3"
            color="black"
            align="center"
            sx={{ paddingTop: "100px" }}
            data-aos="zoom-out"
          >
            Current Opportunities
          </Typography>
          <Grid
            container
            spacing={5}
            sx={{ marginTop: "50px" }}
            direction="row"
            justify="center"
            alignItems="center"
          >
            {cardCareer.map((e, index) => {
              return (
                <Grid item lg={4} md={12} sm={6} xs={12} key={index}>
                  <Card
                    className="careercard"
                    data-aos="zoom-in"
                    sx={{ height: "100%", paddingBottom: "20px" }}
                  >
                    <CardContent>
                      <Box
                        component="img"
                        className="cardimg"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "auto",
                        }}
                        src={e.imgsrc}
                      />
                      <Typography variant="h5" mt={3} align="center">
                        {e.position}
                      </Typography>
                      <Typography variant="h6" align="center">
                        Location:-{e.location}
                      </Typography>
                      <Typography variant="body2" align="center">
                        {e.experience}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        href="#form"
                        variant="contained"
                        size="small"
                        sx={{
                          textAlign: "center",
                          justifyContent: "center",
                          float: "center",
                          backgroundColor: "black",
                          display: "flex",
                          alignItems: "center",
                          margin: "auto",
                          "&:hover": {
                            backgroundColor: "black",
                            color: "#fff",
                          },
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      <EmpForm />

      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ marginTop: "50px" }}
          data-aos="fade-up"
        >
          PERKS OF JOINING ELSPARTANS
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
          7 REMARKABLE REASONS to Join ELaunch Solution Pvt. Ltd.
        </Typography>
        {careerPerk.map((e, index) => {
          return (
            <Typography
              variant="body1"
              align="left"
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

export default Career;
