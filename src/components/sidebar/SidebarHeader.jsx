import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Avatar, Box, Typography, Skeleton } from "@mui/material";
import ThemeActionButton from "../ThemeActionButton";
import SocialMediaIcons from "../SocialMediaIcons";
import DirectionActionButton from "../DirectionActionButton";
import { grey } from "@mui/material/colors";
import { person1Img } from "../../assets/personPhoto";
const SidebarHeader = () => {
  const theme = useTheme();
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  useEffect(() => {
    setLoadingSkeleton(true);
    const timer = setTimeout(() => {
      setLoadingSkeleton(false);
    }, [2000]);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Box sx={{ textAlign: "center", mt: 2 }}>
      <Box sx={{ position: "relative" }}>
        <DirectionActionButton />
        <ThemeActionButton />
        {loadingSkeleton ? (
            <Skeleton
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark" ? grey[800] : grey[200],
                margin: "0 auto",
              }}
              animation="wave"
              variant="rounded"
              width={180}
              height={180}
            ></Skeleton>
        ) : (
            <Avatar
              className={
                theme.palette.mode === "dark"
                  ? "shadowBoxWhite"
                  : "shadowBoxBlack"
              }
              variant="rounded"
              sx={{
                width: 180,
                height: 220,
                margin: "0 auto",
                border: `1px solid ${grey[900]}`,
              }}
              alt="Erfan Forouzi"
              src={person1Img}
            >
              EF
            </Avatar>
        )}
      </Box>
      {loadingSkeleton ? (
        <Skeleton
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[200],
            margin: "10px auto",
          }}
          animation="wave"
          variant="rounded"
          width={"50%"}
          height={"20px"}
        ></Skeleton>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Typography variant="h6" color="">
            {"{{"}
          </Typography>
          <Typography color="" variant="h6">
            {theme.direction === "rtl" ? "عرفان فروزی" : "Erfan Forouzi"}
          </Typography>
          <Typography variant="h6" color="">
            {"}}"}
          </Typography>
        </Box>
      )}
      {loadingSkeleton ? (
        <Skeleton
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[200],
            margin: "10px auto",
          }}
          animation="wave"
          variant="rounded"
          width={"50%"}
          height={"10px"}
        ></Skeleton>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body2" color="">
            {"{{"}
          </Typography>
          <Typography  variant="body2">
            {theme.direction === "rtl"
              ? "توسعه دهنده فرانت اند"
              : "Front-End Developer"}
          </Typography>
          <Typography variant="body2" color="">
            {"}}"}
          </Typography>
        </Box>
      )}
      {loadingSkeleton ? (
        <Skeleton
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[200],
            margin: "10px auto",
          }}
          animation="wave"
          variant="rounded"
          width={"60%"}
          height={"10px"}
        ></Skeleton>
      ) : (
        <SocialMediaIcons />
      )}
    </Box>
  );
};
export default SidebarHeader;
