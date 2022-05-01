import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

const MyOrders = () => {
  const [countValue, setCountValue] = useState<number>(0);

  return (
    <Grid container>
      <Grid xs={12} sx={{ textAlign: "center" }}>
        <Typography sx={{ mt: 10 }} variant="h2" component="div" color="coral">
          Count
        </Typography>
        <Typography sx={{ mt: 10 }} variant="h4" component="div" color="white">
          {countValue}
        </Typography>
        <Button
          sx={{ mt: 10 }}
          variant="contained"
          onClick={() => {
            if (countValue > 9) {
              setCountValue(0);
              return alert("Число больше 10");
            }
            setCountValue(countValue + 1);
          }}
        >
          Click
        </Button>
      </Grid>
    </Grid>
  );
};

export default MyOrders;
