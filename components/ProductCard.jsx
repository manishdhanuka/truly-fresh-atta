"use client";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";
import Rating from "@mui/material/Rating";
import ImageSlider from "./ImageGallery";

export default function ProductCard({ product }) {
  return (
    <Card className="flex-inline w-[49.2%] sm:w-[24.6%] pt-4">
      <ImageSlider images={product.images} />
      <CardContent className="!pb-0">
        <Typography variant="h5">{product.name}</Typography>
        <Typography gutterBottom variant="body1">
          {product.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
        <Rating
          name="product-rating"
          defaultValue={product.rating}
          precision={0.5}
          className="mt-4"
        />
      </CardContent>
      <CardActions disableSpacing className="justify-between">
        <div>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </div>
        <IconButton aria-label="add to favorites">
          <AddShoppingCartRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
