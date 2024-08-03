import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "./Common/SearchBar";
import ConnectionLost from "../assets/ConnectionLost.svg";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7rem !important",
  },
  text: {
    color: "#9ca3af",
  },
  shipImage: {
    width: "249.37px",
    height: "144px",
  },
  searchBox: {
    width: "100%",
  },
  connectionText: {
    fontWeight: "600 !important",
    marginTop: "0.8rem !important",
  },
  offlineText: {
    fontSize: "13px !important",
    marginTop: "0.5rem !important",
  },
  retryButton: {
    marginTop: "1rem !important",
    cursor: "pointer",
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
        <img
          src={ConnectionLost}
          className={classes.shipImage}
          alt="Connection Lost"
        />
        <Typography variant='h6' className={classes.connectionText}>
          Connection Lost
        </Typography>
        <Typography className={`${classes.text} ${classes.offlineText}`}>
          Oops! It seems you are currently offline.
        </Typography>
        <Button className={classes.retryButton}>Retry</Button>
      </div>
    </div>
  );
};

export default ShipmentTracker;
