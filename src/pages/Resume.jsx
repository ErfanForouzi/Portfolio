import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import Grid from "@mui/material/Unstable_Grid2";
import CustomDivider from "../components/common/CustomDivider";
import DevEduTimeline from "../components/pages/DevEduTimeline";
import {
  Card,
  CardContent,
} from "@mui/material";
import { PermContactCalendarRounded } from "@mui/icons-material";


const Resume = ({ title }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  const theme = useTheme()
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#121212" :"white",
        overflow: "scroll",
        height: "100vh",
      }}
    >
      <CardContent>
        <Helmet>
          <title>{title}</title>
        </Helmet>
     
        <CustomDivider
          bColor="secondary.main"
          align="center"
          cColor="secondary"
          icon={<PermContactCalendarRounded />}
          text={theme.direction ==="rtl"?"رزومه تحصیلی من":"My Educational Resume"}
        />

        <Grid container sx={{ mt: 5 }}>
          <Grid sx={{ margin: "0 auto" }} xs={12} sm={8} md={8} lg={6}>
          <DevEduTimeline loading={loading}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Resume;
