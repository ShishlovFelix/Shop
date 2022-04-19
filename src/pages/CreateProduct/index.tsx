import React, { useEffect, useState } from "react";
import { Box, Button, Grid, MenuItem, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import products from "../../api/products";

const CreateProduct = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);

  useEffect(() => {
    products.getAllCategories().then((e) => setAllCategories(e.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      ratingRate: "",
      ratingCount: "",
    },
    onSubmit: (values) => {
      products.createProduct(values);
    },
  });
  return (
    <Grid container>
      <Grid xs={12} sx={{ textAlign: "center" }}>
        <Typography sx={{ mt: 10 }} variant="h2" component="div" color="coral">
          Create Product
        </Typography>
        <Box sx={{ mt: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ display: "block" }}>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="title"
                  label="Title"
                  variant="standard"
                  name="title"
                  type="title"
                  onChange={formik.handleChange}
                  value={formik.values.title}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="price"
                  label="Price"
                  variant="standard"
                  name="price"
                  type="price"
                  onChange={formik.handleChange}
                  value={formik.values.price}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="description"
                  label="Description"
                  variant="standard"
                  name="description"
                  type="description"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </Box>
              <Box>
                <Select
                  sx={{ mt: 1, width: "12%" }}
                  id="category"
                  label="Select category"
                  value={formik.values.category}
                  onChange={(e) =>
                    formik.setFieldValue(e.target.value, "category")
                  }
                  variant="standard"
                >
                  {allCategories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="image"
                  label="Image"
                  variant="standard"
                  name="image"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                />
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 2 }}
                  id="ratingRate"
                  label="Rating Rate"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="standard"
                />
              </Box>
              <Box>
                <TextField
                  sx={{ mt: 1 }}
                  id="ratingCount"
                  label="Rating Count"
                  variant="standard"
                  name="ratingCount"
                  type="ratingCount"
                  onChange={formik.handleChange}
                  value={formik.values.ratingCount}
                />
              </Box>
            </Box>

            <Button sx={{ mt: 4 }} variant="contained" type="submit">
              Create
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateProduct;
