import { useTheme } from "@emotion/react";
import { Helmet } from "react-helmet-async";
import { Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import worldMap from "../assets/map.svg";
import { AccountCircle } from "@mui/icons-material";
import CustomDivider from "../components/common/CustomDivider";
import { ContactForm } from "../components/pages";

const Contact = ({ title }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.mode === "dark" ? "#121212" : "white",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <CardContent>
        <CustomDivider
          bColor="warning.main"
          align="center"
          cColor="warning"
          icon={<AccountCircle />}
          text={theme.direction ==="rtl"?"ارتباط با من":"Contact With Me"}
        />

        <Grid container sx={{ mt: 5 }}>
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <ContactForm />
          </Grid>
          <Grid
            xs={0}
            sm={0}
            md={4}
            lg={4}
            xl={4}
            sx={{
              textAlign: "center",
              backgroundImage: `url(${worldMap})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                mt: 4,
                fontFamily: "vazir",
              }}
            >
            {theme.direction ==="rtl"?"بیا در مورد همه چیز باهم صحبت کنیم":"Lets talk about everything"}
              
            </Typography>
            <Typography
              variant="body1"
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
                mt: 4,
                fontFamily: "vazir",
              }}
            >
              <a
                alt="email"
                style={{ color: "tomato" }}
                href="mailto:erfanforouzzziii@gmail.com"
              >
            {theme.direction ==="rtl"?"ایمیل":"Email"}
              </a>{" "}
            {theme.direction ==="rtl"?"بزن به من":"To Me"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Contact;
