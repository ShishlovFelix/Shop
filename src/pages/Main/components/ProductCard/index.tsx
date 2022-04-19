import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Box, CardActionArea, Rating } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../../../api/products/types";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Fab from "@mui/material/Fab";

const ProductCard: React.FC<IProduct> = (props) => {
  const { id, image, title, ratingRate, ratingCount, price } = props;
  const rightPrice = Math.floor(price * 30);
  return (
    <Link style={{ textDecoration: "none" }} to={`/product/${id}`}>
      <Card sx={{ mt: 9 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={image}
            alt="no image"
          />
          <CardContent>
            <Typography
              style={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                height: 65,
              }}
              variant="h5"
              component="div"
            >
              {title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: "10px",
              }}
            >
              <Typography variant="h4" color="coral">
                {rightPrice} UAH
              </Typography>
              <Fab disabled aria-label="like">
                <FavoriteIcon />
              </Fab>
            </Box>
            <Box sx={{ fontSize: 24, mt: 1 }}>
              <Rating
                sx={{ mt: 1, mr: 9 }}
                name="rate"
                defaultValue={ratingRate}
                readOnly
              />
              {ratingCount} Reviews
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ProductCard;
