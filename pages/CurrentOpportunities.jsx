import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import { cardCareer } from "../Static/Utils";
import React from "react";
import "aos/dist/aos.css";

const CurrentOpportunities = () => {
  return (
    <Box sx={{paddingY:"60px"}}>
      <Box
        bgcolor={`#f0f4f6`}
        sx={{
          height: { lg: "800px", md: "1300px", sm: "1300px", xs: "1700px" },
        }}
      >
        <Container>
          <Typography
            variant="h3"
            color="black"
            align="center"
            sx={{ paddingY: "80px" }}
            data-aos="zoom-out"

          >
            Current Opportunities
          </Typography>
          <Grid
            container
            spacing={5}
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
                    sx={{
                      height: "430px",
                      display: "flex",
                      alignItems: "center",
                      justifyItems: "center",
                      flexDirection: "column",
                      marginY: "50px",
                    }}
                  >
                    <CardContent>
                      <Box
                        component="img"
                        className="cardimg"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height:"225px"
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
    </Box>
  );
};

export default CurrentOpportunities;
