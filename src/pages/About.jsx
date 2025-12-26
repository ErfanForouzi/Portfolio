import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent, Avatar, Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Skills, DevInfo } from "../components/pages";
import CustomDivider from "../components/common/CustomDivider";
import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { person1Img } from "../assets/personPhoto";
const About = ({ title }) => {
  const theme = useTheme();
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  useEffect(() => {
    setLoadingSkeleton(true);
    const timer = setTimeout(() => {
      setLoadingSkeleton(false);
    }, [3000]);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "white",
        height: "100vh",
        overflow: "scroll",
      }}
    >
      <Helmet>
        <title>
          {theme.direction === "ltr"
            ? "About Me | Erfan Forouzi Website"
            : "وب سایت عرفان فروزی |  درباره من"}
        </title>
      </Helmet>
      <CardContent>
        <CustomDivider
          bColor="primary.main"
          align="center"
          cColor="primary"
          icon={<CodeRounded />}
          text={
            theme.direction === "rtl"
              ? "توسعه دهنده فرانت اند"
              : "Front-End Developer"
          }
        />

        <Grid container sx={{ my: 3 }}>
          <Grid  xs={12} sm={12} md={12} lg={12} xl={12}>
            <div style={{direction:theme.direction === 'rtl'?'ltr':'rtl'}}>
            <DevInfo />
            </div>
          </Grid>
       
        </Grid>
        <CustomDivider
          bColor="success.main"
          align="center"
          cColor="success"
          icon={<SelfImprovementRounded />}
          text={theme.direction === "rtl" ? "مهارت های من" : "My Skills"}
        />
        <Grid container spacing={4} mt={3}>
          <Skills />
        </Grid>
      </CardContent>
    </Card>
  );
};
export default About;
