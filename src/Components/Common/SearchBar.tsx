import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material";

const useStyles = makeStyles({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    backgroundColor: "#f5f7fa",
    width: "100%",
    height: "110px",
    borderRadius: "10px",
  },
  textField: {
    backgroundColor: "#fff",
    width: "55%",
    "& .MuiInputBase-input": {
      fontSize: "12px",
    },
  },
  trackButton: {
    height: "2rem",
    marginLeft: "1.5rem !important",
  },
});

const SearchBar: React.FC = () => {
  const classes = useStyles();
  const [awbId, setAwbId] = useState("");

  const handleTrack = () => {
    console.log("Tracking AWB ID:", awbId);
  };

  return (
    <form className={classes.form} noValidate>
      <TextField
        className={classes.textField}
        placeholder="Enter AWB"
        variant="outlined"
        size="small"
        value={awbId}
        onChange={(e) => setAwbId(e.target.value)}
      />
      <Button
        className={classes.trackButton}
        variant="contained"
        color="primary"
        onClick={handleTrack}
      >
        Track
      </Button>
    </form>
  );
};

export default SearchBar;
