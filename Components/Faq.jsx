import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { FAQ } from "../Static/Utils";

const Faq = () => {
  const [show, setShow] = useState(false);
  const [indexItem, setIndexItem] = useState(0);

  console.log(FAQ);

  return (
    <>
      <Grid container className="faqcontainer">
        <Grid item lg={10}>
          {FAQ.map((item, index) => (
            <Box key={index}>
              <Box
                className="mainheading"
                display="flex"
                alignItems="center"
                onClick={() => {
                  setIndexItem(index);
                  index === indexItem ? setShow(!show) : setShow(true);
                }}
              >
                {index === indexItem && show ? "➖" : "➕"}
                <Typography variant="h6" ml={2} fontSize={20}>
                  {item.question}
                </Typography>
              </Box>
              {index === indexItem && show && (
                <Typography variant="body1" className="answer">
                  {item.answer}
                </Typography>
              )}
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Faq;
