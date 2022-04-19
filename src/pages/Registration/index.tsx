import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import auth from "../../api/auth";

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      auth.registration(values);
    },
  });

  return (
    <Grid container>
      <Grid xs={12} sx={{ textAlign: "center" }}>
        <Typography sx={{ mt: 10 }} variant="h2" component="div" color="coral">
          Registration
        </Typography>
        <Box sx={{ mt: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "block" }}>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="firstName"
                  type="firstName"
                  label="First Name"
                  variant="standard"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  label="Last Name"
                  variant="standard"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="email"
                  label="Email"
                  variant="standard"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="password"
                  label="Password"
                  variant="standard"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </Box>
            </Box>

            <Button sx={{ mt: 4 }} variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Registration;
