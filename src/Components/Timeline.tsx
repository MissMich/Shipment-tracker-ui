import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { makeStyles } from "@mui/styles";
import { Avatar, Typography } from "@mui/material";
import ShipmentCreated from "../assets/ShipmentCreated.svg";
import ShipmentPicked from "../assets/ShipmentPicked.svg";
import Proof from "../assets/Proof.svg";
import Delivery from "../assets/Delivery.svg";
import Profile1 from "../assets/Profile1.svg";
import Profile2 from "../assets/Profile2.svg";

const useStyles = makeStyles({
  container: {
    marginLeft: "2rem !important",
    marginTop: '1.5rem !important',
  },
  timelineConnector: {
    height: "3.5rem",
    marginLeft: "-14.2rem",
  },
  timelineDot: {
    background: "none !important",
    border: "1px #808080 solid !important",
    marginLeft: "-8rem !important",
    marginTop: "0 !important",
    marginBottom: "0 !important"
  },
  oppositeContent: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "3rem",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textSmall: {
    fontSize: "13px !important",
  },
  avatar: {
    height: "25px !important",
    width: "25px !important",
  },
  userInfo: {
    display: "flex",
    alignItems: "center",
  },
});

interface Event {
  time: string;
  date: string;
  title: string;
  description: string;
  user: string;
  avatar: string;
  icon: React.ReactElement;
}

const events: Event[] = [
  {
    time: "12:05PM",
    date: "Dec 16, 2023",
    title: "Shipment created",
    description: "Shipment Description",
    user: "Abdo Saeed",
    avatar: Profile1,
    icon: <img src={ShipmentCreated} alt="Shipment Created" />,
  },
  {
    time: "14:05PM",
    date: "Dec 16, 2023",
    title: "Shipment picked-up",
    description: "",
    user: "Beshoy Ezzat",
    avatar: Profile2,
    icon: <img src={ShipmentPicked} alt="Shipment Picked" />,
  },
  {
    time: "14:08PM",
    date: "Dec 16, 2023",
    title: "Proof of pick-up",
    description: "Proof of pick-up description",
    user: "James Collins",
    avatar: Profile1,
    icon: <img src={Proof} alt="Proof of Pick-up" />,
  },
  {
    time: "12:05PM",
    date: "Dec 16, 2023",
    title: "Shipment on delivery",
    description: "Description goes here",
    user: "",
    avatar: "",
    icon: <img src={Delivery} alt="Shipment on Delivery" />,
  },
];

interface EventItemProps {
  event: Event;
  isLast: boolean;
}

const EventItem: React.FC<EventItemProps> = ({ event, isLast }) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent}>
        <Typography variant="body2" className={classes.textSmall} color="textSecondary">
          {event.time}
        </Typography>
        <Typography variant="body2" className={classes.textSmall} color="textSecondary">
          {event.date}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className={classes.timelineDot}>
          {event.icon}
        </TimelineDot>
        {!isLast && <TimelineConnector className={classes.timelineConnector} />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography className={classes.textSmall}>
          {event.title}
        </Typography>
        <Typography className={classes.textSmall} color="textSecondary">
          {event.description}
        </Typography>
        {event.avatar && (
          <div className={classes.userInfo}>
            <Avatar className={classes.avatar} alt={event.user} src={event.avatar} />
            <Typography className={classes.textSmall} style={{ marginLeft: "8px" }}>
              {event.user}
            </Typography>
          </div>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};

const ShipmentTimeline: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h6" className={classes.container}>
        Timeline
      </Typography>
      <Timeline>
        {events.map((event, index) => (
          <EventItem key={index} event={event} isLast={index === events.length - 1} />
        ))}
      </Timeline>
    </div>
  );
};

export default ShipmentTimeline;
