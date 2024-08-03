import React, { useState, ChangeEvent } from "react";
import {
  Button,
  Grid,
  Link,
  TextField,
  Checkbox,
  Typography,
  InputAdornment,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Logo from "../assets/Logo.svg";
import {
  GroupOutlined,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
} from "@mui/icons-material";

const useStyles = makeStyles({
  body: {
    margin: "1.5rem",
  },
  container: {
    height: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divContainer: {
    width: "400px",
    height: "290px",
  },
  linkText: {
    display: "flex",
    justifyContent: "space-between",
  },
});

interface LoginState {
  username: string;
  password: string;
}

const InputField: React.FC<{
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}> = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  startAdornment,
  endAdornment,
}) => (
  <Grid item xs={12} style={{ marginBottom: "0.8rem" }}>
    <Typography style={{ fontSize: "15px" }}>{label}</Typography>
    <TextField
      placeholder={`Enter ${label.toLowerCase()}`}
      variant="outlined"
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      fullWidth
      margin="dense"
      size="small"
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
    />
  </Grid>
);

const Header: React.FC = () => (
  <Grid
    item
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "1.2rem",
    }}
  >
    <Typography style={{ fontSize: "24px", fontWeight: "600" }}>
      Sign in
    </Typography>
    <Typography style={{ color: "#4B5563", fontSize: "14px" }}>
      Do you have an account yet?{" "}
      <Link style={{ textDecoration: "none", cursor: "pointer" }}>
        Sign Up here
      </Link>
    </Typography>
  </Grid>
);

const Login: React.FC = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState<LoginState>({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={classes.body}>
      <Grid>
        <img src={Logo} alt="Logo" />
      </Grid>
      <Grid container className={classes.container}>
        <div className={classes.divContainer}>
          <Header />
          <InputField
            label="Username"
            name="username"
            value={state.username}
            onChange={handleChange}
            startAdornment={<GroupOutlined />}
          />
          <Grid container className={classes.linkText}>
            <Typography style={{ fontSize: "15px" }}>Password</Typography>
            <Link style={{ textDecoration: "none", fontSize: "15px" }}>
              Forgot Password?
            </Link>
          </Grid>
          <InputField
            label=""
            name="password"
            type={showPassword ? "text" : "password"}
            value={state.password}
            onChange={handleChange}
            startAdornment={<LockOutlined />}
            endAdornment={
              <IconButton onClick={togglePasswordVisibility} edge="end">
                {showPassword ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            }
          />
          <FormControlLabel
            control={<Checkbox name="rememberMe" />}
            label="Remember me"
          />
          <Button
            variant="contained"
            color="primary"
            style={{ background: "#2563EB", marginTop: "0.4rem" }}
            fullWidth
          >
            Sign in
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default Login;
