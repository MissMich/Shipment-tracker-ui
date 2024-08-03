import { makeStyles } from "@mui/styles";
import { Typography, Box, Grid, IconButton } from "@mui/material";
import {
  CallMade,
  PersonOutlined,
  ArrowDownward,
  FmdGoodOutlined,
  LocalShippingOutlined,
} from "@mui/icons-material";
import DollarSign from "../assets/DollarSign.svg";

const useStyles = makeStyles({
  container: {
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
    borderRadius: "8px",
  },
  detailsContainer: {
    padding: "1rem",
  },
  detailItem: {
    display: "flex",
    marginBottom: "0.5rem",
    alignItems: "center",
  },
  label: {
    fontSize: "13px !important",
    color: "#808080",
    flex: 1,
  },
  value: {
    fontSize: "13px !important",
    flex: 1,
  },
  icons: {
    fontSize: "1.25rem !important",
  },
  iconContainer: {
    marginRight: "0.5rem",
  },
  footerItem: {
    backgroundColor: "#f5f7fa",
    padding: "10px",
    borderRadius: "4px",
  },
});

const DetailItem: React.FC<{ label: string; value: string; icon: React.ReactNode }> = ({ label, value, icon }) => {
  const classes = useStyles();
  return (
    <Box className={classes.detailItem}>
      <Box className={classes.iconContainer}>
        <IconButton>
          {icon}
        </IconButton>
      </Box>
      <Typography className={classes.label}>{label}</Typography>
      <Typography className={classes.value}>{value}</Typography>
    </Box>
  );
};

const ShipmentDetails = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.detailsContainer}>
        <Typography variant="h6" style={{ fontSize: '16px' }}>4515645646466</Typography>
        <Typography variant="body2" style={{ fontSize: '14px' }} color="textSecondary">
          Last updated 16/12/2023 11:33 AM
        </Typography>
      </Box>
      <Grid container spacing={1} className={classes.detailsContainer}>
        <Grid item xs={12}>
          <DetailItem label="Sender" value="Mohamamd Manaa" icon={<CallMade className={classes.icons} />} />
        </Grid>
        <Grid item xs={12}>
          <DetailItem label="Consignee" value="Beshouy Ezzat" icon={<PersonOutlined className={classes.icons} />} />
        </Grid>
        <Grid item xs={12}>
          <DetailItem label="Origin Address" value="Ahmed Hassan, 25, Nile Street, Zamalek, Cairo, Egypt" icon={<ArrowDownward className={classes.icons} />} />
        </Grid>
        <Grid item xs={12}>
          <DetailItem label="Destination Address" value="Fatima Ali, 10, Corniche Road, Gleem, Alexandria, Egypt" icon={<FmdGoodOutlined className={classes.icons} />} />
        </Grid>
        <Grid item xs={12}>
          <DetailItem label="Shipping Service" value="Express Service" icon={<LocalShippingOutlined className={classes.icons} />} />
        </Grid>
      </Grid>
        <Grid item xs={12}>
          <Box className={`${classes.detailItem} ${classes.footerItem}`}>
            <Box className={classes.iconContainer}>
              <IconButton>
                <img src={DollarSign} className={classes.icons} />
              </IconButton>
            </Box>
            <Typography className={classes.label}>Total COD Amount</Typography>
            <Typography className={classes.value}>499.55 EGP</Typography>
          </Box>
        </Grid>
    </Box>
  );
};

export default ShipmentDetails;