import {  useState,useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Box, Typography,Skeleton, useMediaQuery } from "@mui/material";
import { CopyrightRounded, FavoriteRounded } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
const SidebarFooter = () => {
  const [loadingSkeleton,setLoadingSkeleton] = useState(false)
  const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  

  useEffect(() => {
    setLoadingSkeleton(true);
    const timer = setTimeout(() => {
      setLoadingSkeleton(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        mt:isMdUp?8:0
      }}
    >
    {
      loadingSkeleton ? (
        <Skeleton
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[200],
            margin: "10px auto",
          }}
          animation="wave"
          variant="rounded"
          width={"75%"}
          height={"15px"}
        ></Skeleton>
      ):(
        <Typography variant="body2">
        {theme.direction === "rtl"
          ? " طراحی شده توسط عرفان فروزی"
          : "Designed By Erfan Forouzi"}{" "}
        <FavoriteRounded sx={{ verticalAlign: "middle", color: "red" }} />
      </Typography>
      )
    }
    {
      loadingSkeleton ? (
        <Skeleton
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[200],
            margin: "10px auto",
          }}
          animation="wave"
          variant="rounded"
          width={"40%"}
          height={"15px"}
        ></Skeleton>
      ):(
        <Typography sx={{ my: 2 }} variant="caption">
        {theme.direction === "rtl" ? " کپی رایت 1404 " : "Copyright 2025"}
        <CopyrightRounded sx={{ verticalAlign: "middle" }} />
      </Typography>
      )
    }
    </Box>
  );
};
export default SidebarFooter;
