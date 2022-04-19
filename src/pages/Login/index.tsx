import { Box, Button, Grid, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useFormik } from "formik";
import auth from "../../api/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      auth
        .authorization(values)
        .then((e) => localStorage.setItem("token", e.data.token));
    },
  });

  return (
    <Grid container>
      <Grid xs={12} sx={{ textAlign: "center" }}>
        <Typography sx={{ mt: 10 }} variant="h2" component="div" color="coral">
          Login
        </Typography>
        <Box sx={{ mt: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "block" }}>
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
            <Link
              style={{
                display: "flex",
                textDecoration: "none",
                justifyContent: "center",
              }}
              to={"/registration"}
            >
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Registration
              </Button>
            </Link>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
