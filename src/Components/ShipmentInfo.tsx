import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid } from "@mui/material";
import SearchBar from "./Common/SearchBar";
import ShipmentDetails from "./ShipmentDetail";
import Timeline from "./Timeline";

const useStyles = makeStyles({
  root: {
    height: "90vh",
    margin: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ShipmentDetails />
        </Grid>
        <Grid item xs={12} md={6}>
          <Timeline />
        </Grid>
      </Grid>
    </div>
  );
};

export default ShipmentTracker;
