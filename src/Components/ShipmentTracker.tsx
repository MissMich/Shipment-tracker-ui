import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";
import Shipimage from "../assets/ShipImage.svg";
import SearchBar from "./Common/SearchBar";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7rem",
  },
  text: {
    color: "#9ca3af",
    fontSize: "15px !important",
    marginTop: "1rem !important",
  },
  shipImage: {
    width: "249.37px",
    height: "144px",
  },
  searchBox: {
    width: "100%",
  },
});

const ShipmentTracker: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.searchBox}>
        <SearchBar />
      </Box>
      <div className={classes.imageContainer}>
        <img src={Shipimage} className={classes.shipImage} alt="Ship" />
        <Typography className={classes.text}>
          Enter a valid AWB ID to display details
        </Typography>
      </div>
    </div>
  );
};

export default ShipmentTracker;
