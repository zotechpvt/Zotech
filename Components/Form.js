import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
      <Card
        sx={{
          marginTop:"50px",
          width: "80%",
          padding:"15px",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px 5px #888888",
        }}
      >
        <CardContent >
          <form action="https://formspree.io/f/xknawrad" method="POST">
            <Grid container >
              <Grid item xs={12} sm={12} >
                <TextField
                  label="Name"
                  name="Name"
                  placeholder="Enter Your  Name"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} mt={2}>
                <TextField
                  type="email"
                  name="Email"
                  label="Email"
                  placeholder="Enter Your Email"
                  variant="outlined"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} mt={2}>
                <TextField
                  type="text"
                  label="Message"
                  name="Message"
                  placeholder="Enter Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12} mt={2}>
                <Button
                  size="large"
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    cursor: "pointer",
                    marginTop: "10px",
                    "&:hover": {
                      backgroundColor: "black",
                      color: "#fff",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
  );
};

export default Form;
