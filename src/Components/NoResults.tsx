import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "./Common/SearchBar";
import NoResult from "../assets/NoResult.svg";

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
    marginTop: "7rem !important",
  },
  text: {
    color: "#9ca3af",
    fontSize: "13px !important",
    marginTop: "0.5rem !important",
  },
  shipImage: {
    width: "249.37px",
    height: "144px",
  },
  searchBox: {
    width: "100%",
  },
  mainText: {
    fontWeight: "600 !important",
    marginTop: "0.8rem !important",
  },
  retryButton: {
    marginTop: "1rem !important",
    cursor: "pointer",
  },
});

const NoResults: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.searchBox}>
        <SearchBar />
      </Box>
      <div className={classes.imageContainer}>
        <img src={NoResult} className={classes.shipImage} alt="No Results" />
        <Typography variant="h6" className={classes.mainText}>
          No results found
        </Typography>
        <Typography className={classes.text}>
          No results found. Please try again.
        </Typography>
        <Button className={classes.retryButton}>Retry</Button>
      </div>
    </div>
  );
};

export default NoResults;
