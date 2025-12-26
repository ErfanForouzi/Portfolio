import { useTheme } from "@emotion/react";
import { Typography, Box } from "@mui/material";
import {ageLogo, apartmentLogo, emailLogo, githubLogo, instagaramLogo, linkedInLogo, personLogo, phoneLogo, telegramLogo, whatsappLogo,} from "../../assets/socialMediaIcons";

const Info = ({ children, icon, href }) => {
  const theme = useTheme();
  return (
    <>
      {theme.direction === "rtl" ? (
        <Box  sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        m: 1,
      }}>
          <Typography variant="body1">
            <a
              style={{
                textDecoration: "",
                color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
              }}
              href={href}
            >
              {children}
            </a>
          </Typography>
          <Box
            sx={{ width: 20, height: 20, mr: 1 }}
            component="img"
            src={icon}
          ></Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent:{
              xs:"flex-revert",
              sm:"flex-revert",
              md:"flex-end",
              lg:"flex-end",
              xl:"flex-end",
            },
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            <Box
              sx={{ width: 20, height: 20, mr: 1 }}
              component="img"
              src={icon}
            ></Box>
            <a
              style={{
                textDecoration:"",
                color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
              }}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          </Typography>
        </Box>
      )}
      </>
  );
};
const DevInfo = () => {
  const theme = useTheme();
  return (
    <>
      {theme.direction === "rtl" ? (
        <>
          <Info icon={personLogo}>نام و نام خانوادگی : عرفان فروزی</Info>
          <Info icon={emailLogo}>erfanforouzzziii@gmail.com : ایمیل</Info>
          <Info icon={phoneLogo}>شماره موبایل : 09351567656</Info>
          <Info href="https://github.com/ErfanForouzi" icon={githubLogo}>
            Erfan Forouzi : گیت‌هاب
          </Info>
          <Info
            href="https://www.linkedin.com/in/erfan-forouzi-b2892227b/"
            icon={linkedInLogo}
          >
            Erfan Forouzi : لینکدین
          </Info>
        </>
      ) : (
        <>
          <Info icon={personLogo}>Fullname : Erfan Forouzi</Info>
          <Info icon={emailLogo}>Email : erfanforouzzziii@gmail.com</Info>
          <Info icon={phoneLogo}>Phone Number : 09351567656</Info>
          <Info href="https://github.com/ErfanForouzi" icon={githubLogo}>
             Github : Erfan Forouzi
          </Info>
          <Info
            href="https://www.linkedin.com/in/erfan-forouzi-b2892227b/"
            icon={linkedInLogo}
          >
           LinkedIn : Erfan Forouzi
          </Info>
        </>
      )}
    </>
  );
};
export default DevInfo;
