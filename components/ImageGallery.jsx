import React, { useState } from "react";
import { Card, CardMedia, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  imageSlider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageCard: {
    width: "90%",
    position: "relative",
  },
  iconButtonContainer: {
    position: "absolute",
    top: "50%",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  leftIconButton: {
    position: "absolute",
    left: "0",
    color: "#f0f0f0",
  },
  rightIconButton: {
    position: "absolute",
    right: "0",
    color: "#f0f0f0",
  },
}));

const ImageSlider = ({ images }) => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  return (
    <div className={classes.imageSlider}>
      <Card className={classes.imageCard}>
        <CardMedia
          component="img"
          alt={`Image ${currentImage + 1}`}
          image={images[currentImage]}
          className={classes.cardMedia}
        />
        <div className={classes.iconButtonContainer}>
          <IconButton
            className={classes.leftIconButton}
            onClick={previousImage}
            size="small"
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            className={classes.rightIconButton}
            onClick={nextImage}
            size="small"
          >
            <ChevronRightIcon />
          </IconButton>
        </div>
      </Card>
    </div>
  );
};

export default ImageSlider;
