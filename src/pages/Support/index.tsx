import React from "react";

import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Support = () => {
  return (
    <Grid container>
      <Grid xs={6}>
        <Typography
          variant="h3"
          color="white"
          sx={{ margin: "200px 0px 60px 20px", textAlign: "center" }}
        >
          <p>
            {" "}
            We thank you for your purchase and we are sorry that you have any
            problems.
          </p>{" "}
          <p>Let's solve this problem together.</p> Write a letter that
          describes our problem and we will solve it.
        </Typography>
      </Grid>
      <Grid xs={6}>
        <Typography
          variant="h3"
          color="coral"
          sx={{ margin: "300px 0px 0px 120px" }}
        >
          <p>rozetka.support1@gmail.com</p>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Support;
