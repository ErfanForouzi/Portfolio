import { useTheme } from "@emotion/react";
import { Typography, Slide } from "@mui/material";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { SchoolRounded } from "@mui/icons-material";
import { devInfo,devInfoEn } from "../../constants/details";

const DevEduTimeline = ({ loading }) => {
  const theme = useTheme();
  return (
    <>
      {theme.direction === "rtl" ? (
        <Timeline position="right">
          {devInfo.map((item, index) => (
            <Slide
              in={loading}
              direction="up"
              style={{
                transitionDelay: loading ? `${index + 4}99MS` : "0MS",
              }}
            >
              <TimelineItem key={index}>
                <TimelineOppositeContent>{item.year}</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="reduxCustom2" variant="filled">
                    <SchoolRounded />
                  </TimelineDot>
                  {index !== 1 ? <TimelineConnector /> : null}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="caption" color="">
                    {item.cert}
                  </Typography>
                  <Typography variant="body2" color="">
                    {item.major}
                  </Typography>
                  <Typography variant="body1" color="">
                    {item.place}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>
          ))}
        </Timeline>
      ) : (
        <Timeline position="left">
          {devInfoEn.map((item, index) => (
            <Slide
              in={loading}
              direction="up"
              style={{
                transitionDelay: loading ? `${index + 4}99MS` : "0MS",
              }}
            >
              <TimelineItem key={index}>
                <TimelineOppositeContent>{item.year}</TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="reduxCustom2" variant="filled">
                    <SchoolRounded />
                  </TimelineDot>
                  {index !== 1 ? <TimelineConnector /> : null}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="caption" color="">
                    {item.cert}
                  </Typography>
                  <Typography variant="body2" color="">
                    {item.major}
                  </Typography>
                  <Typography variant="body1" color="">
                    {item.place}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Slide>
          ))}
        </Timeline>
      )}
    </>
  );
};
export default DevEduTimeline;
