import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, Typography, Divider, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Course } from "../components/pages";
import { coursesPersian, coursesEnglish } from "../constants/courses";

const Courses = ({ title }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);
  const theme = useTheme();

  return (
    <Card
      sx={{
        backgroundColor:
          theme.palette.mode === "dark" ? "#121212" : "white",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <CardContent>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Divider sx={{mb:2}} textAlign="center">
          <Chip sx={{ p: 3 }} 
          label={
            <Typography
              sx={{ textAlign: "center" }}
              variant="body2"
              color={theme.palette.mode ==="dark"?"whitesmoke":"black"}
            >
            {theme.direction === "rtl" ? "نمونه کارها" : "Work Samples"}
            </Typography> }/>
        </Divider>
        <Grid sx={{ mx: 3 }} container>
          {theme.direction === "rtl" ? (
            <>
              {coursesPersian.map((course, index) => (
                <Course course={course} index={index} loading={loading} />
              ))}
            </>
          ) : (
            <>
              {coursesEnglish.map((course, index) => (
                <Course course={course} index={index} loading={loading} />
              ))}
            </>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Courses;
