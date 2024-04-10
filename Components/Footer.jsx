import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        component="div"
        sx={{ backgroundColor: "#1c1c1c", marginTop: "70px" }}
      >
        <Container>
          <Grid container>
            <Grid item lg={12} xs={12}>
              <Box
                fontWeight="bold"
                align="center"
                display="flex"
                justifyContent="center"
                margin="auto"
                paddingTop="30px"
              >
                <Box>
                  <img
                    src="/assets/Zotech - Logo - Horizontal - White with Transparent BG.png"
                    width={130}
                    height={50}
                  />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Box>
          <Container>
            <Grid container alignItems="center">
              <Grid item lg={6} xs={12}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    textAlign: { md: "center", lg: "left", xs: "center" },
                    fontWeight: "bold",
                    marginTop: "20px"
                  }}
                >
                  About Us
                </Typography>
                <Typography
                  color="white"
                  sx={{ textAlign: { md: "center", lg: "left", xs: "center" } }}
                >
                  At Zotech Pvt. Ltd., our unwavering commitment extends beyond delivering exceptional quality and cost-effective services. We're dedicated to providing top-tier coworking solutions tailored to individuals, alongside our pursuit to lead the global IT market through innovative tech methodologies, fostering the creation of outstanding products.
                </Typography>
              </Grid>
              <Grid item lg={3} xs={12}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    marginTop: { xs: "20px" },
                    fontWeight: "bold",
                  }}
                >
                  Corporate Office
                </Typography>
                <Typography color="white">
                  319, Prime Shoppers, Vesu, Surat,Gujarat,India
                </Typography>
                <Typography color="white">
                  Pin Code : 395007
                </Typography>

              </Grid>
              <Grid item lg={3} xs={12}>
                <Typography
                  variant="h6"
                  color="white"
                  sx={{
                    marginTop: { xs: "20px" },
                    fontWeight: "bold",
                  }}
                >
                  Contact Us
                </Typography>
                <Typography color="white">
                  Phone no:
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    href="tel: 9512596661"
                  >
                    +91 9512596662
                  </a>
                </Typography>
                <Typography color="white" mt={1}>
                  <a
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                    href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHfhKXpRGjJgMbbjMSxLXkFWRnXgmDtJLMJqBcXGsZgpVddNwbjfKcwNQpswXvpZljv"
                  >
                    info@zotech.in
                  </a>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container>
          <Box
            variant="div"
            sx={{
              textAlign: "center",
              border: "white",
              borderTop: "2px solid white",
              py: "10px",
              marginTop: "40px",
              color: "white",
            }}
          >
            <Typography sx={{ marginBottom: "10px" }}>
              © 2020 Zotech - All Rights Reserved
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
