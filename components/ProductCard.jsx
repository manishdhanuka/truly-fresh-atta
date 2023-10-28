"use client";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

export default function ProductCard({ product }) {
  return (
    <Card className="flex-inline w-[49.2%] sm:w-[24.6%] pt-4">
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.images[4]}
          alt={product.name}
        />
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
      </CardActionArea>
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
