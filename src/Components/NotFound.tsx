import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "./Common/SearchBar";
import Error from "../assets/404Error.svg";

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
    fontSize: "13px !important",
  },
  shipImage: {
    width: "249.37px",
    height: "144px",
  },
  searchBox: {
    width: "100%",
  },
  mainText: {
    fontSize: "1.5rem",
    fontWeight: "600 !important",
    marginTop: "0.8rem !important",
  },
  retryButton: {
    marginTop: "1rem !important",
    cursor: "pointer",
  },
});

const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.searchBox}>
        <SearchBar />
      </Box>
      <div className={classes.imageContainer}>
        <img src={Error} className={classes.shipImage} alt="404 Error" />
        <Typography variant="h6" className={classes.mainText}>404</Typography>
        <Typography className={classes.text}>
          Oops! The page you're looking for can't be found.
        </Typography>
        <Button className={classes.retryButton}>Retry</Button>
      </div>
    </div>
  );
};

export default NotFound;
