import { useEffect, useCallback, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Box, Typography } from "@mui/material";
import bg10 from "../assets/avatar10.jpg";
import { circles } from "../constants/particles";
import TextTransition, { presets } from "react-text-transition";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@emotion/react";

const Home = ({ title }) => {
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const persianStrings = [
    "توسعه دهنده هستم",
    "فرانت اند دولوپر هستم",
    "فریلنسر هستم",
  ];
  const englishStrings = [
    "I'm a Developer",
    "I'm a Front-End Developer",
    "I'm a Freelancer",
  ];
  const persianNames = ["عرفان فروزی"];
  const englishNames = ["Erfan Forouzi"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
  }, []);

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${bg10})`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Particles
        id="tsparticles"
        options={circles}
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Box sx={{ display: "flex" }}>
        <Typography variant="h3" color="whitesmoke">
          {"{{"}
        </Typography>
        <TextTransition springConfig={presets.gentle}>
          <Typography variant="h3" color="whitesmoke">
            {theme.direction === "rtl"
              ? persianNames[index % persianNames.length]
              : englishNames[index % englishNames.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h3" color="whitesmoke">
          {"}}"}
        </Typography>
      </Box>

      <Box sx={{ display: "flex" }}>
        <Typography sx={{ mt: 4 }} variant="h5" color="whitesmoke">
          {"{{"}
        </Typography>

        <TextTransition springConfig={presets.wobbly}>
          <Typography
            sx={{ textDecoration: "", mt: 4 }}
            variant="h5"
            color="whitesmoke"
          >
            {theme.direction === "rtl"
              ? persianStrings[index % persianStrings.length]
              : englishStrings[index % englishStrings.length]}
          </Typography>
        </TextTransition>

        <Typography
          sx={{ textDecoration: "", mr: 1, mt: 4 }}
          variant="h5"
          color="whitesmoke"
        >
          {theme.direction === "rtl" ? "من یک" : ""}
        </Typography>
        <Typography sx={{ mt: 4 }} variant="h5" color="whitesmoke">
          {"}}"}
        </Typography>
      </Box>
    </Box>
  );
};
export default Home;
