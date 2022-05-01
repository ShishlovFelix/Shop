import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import { Box, CardActionArea, Checkbox, Rating } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../../../api/products/types";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import user from "../../../../api/user";

interface OwnProps {
  isInWishList: boolean;
}

const ProductCard: React.FC<IProduct & OwnProps> = (props) => {
  const { id, image, title, ratingRate, ratingCount, price, isInWishList } =
    props;
  const [checked, setChecked] = useState<boolean>(isInWishList);
  const rightPrice = Math.floor(price * 30);
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  console.log(checked, "ProductCard!!!!!!!!!!!");
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
              <span
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
              >
                <Checkbox
                  checked={checked}
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  defaultChecked={isInWishList}
                  onChange={(e) => {
                    if (checked === true) {
                      user.deleteFromWishList(String(id));
                    } else {
                      user.addToWishList(String(id));
                    }
                    return setChecked(e.target.checked);
                  }}
                />
              </span>
            </Box>
            <Box
              sx={{
                fontSize: 24,
                mt: 1,
                display: "flex",
              }}
            >
              <Rating
                sx={{ mt: 1, mr: 9 }}
                name="rate"
                defaultValue={ratingRate}
                readOnly
              />
              <Typography sx={{ fontSize: 21 }} color="white">
                {ratingCount} Reviews
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default ProductCard;
