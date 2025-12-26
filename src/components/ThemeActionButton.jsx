import { useContext } from "react";
import { useTheme } from "@emotion/react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, Fab, Typography } from "@mui/material";
import MainContext from "../context";
import { grey } from "@mui/material/colors";
const ThemeActionButton = () => {
  const theme = useTheme();
  const { handleThemeChanger } = useContext(MainContext);
  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: {
            xs: "0",
            sm: "0",
            md: "10px",
          },
          left: {
            xs: "0",
            sm: "0",
            md: "0",
          },
        }}
      >
        <Fab
          sx={{
            backgroundColor:
              theme.palette.mode === "dark" ? "black" : grey[200],
            color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
            ":hover": {
              backgroundColor:
                theme.palette.mode === "dark" ? "black" : grey[200],
            },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          size="small"
          aria-label="Theme Changer"
          variant="extended"
          onClick={handleThemeChanger}
        >
          {theme.palette.mode === "dark" ? (
            <LightMode
              sx={{
                mr: 1,
                color: "orange",
                fontSize: {
                  xs: "15px",
                  sm: "15px",
                  md: "25px",
                  lg: "25px",
                  xl: "25px",
                },
              }}
            />
          ) : (
            <DarkMode
              sx={{
                mr: 1,
                fontSize: {
                  xs: "15px",
                  sm: "15px",
                  md: "25px",
                  lg: "25px",
                  xl: "25px",
                },
              }}
            />
          )}
          {theme.palette.mode === "dark" ? (
            <Typography color="orange" variant="body2">
              {theme.direction === "rtl" ? " روز" : "Light"}
            </Typography>
          ) : (
            <Typography color="black" variant="caption">
              {theme.direction === "rtl" ? " شب" : "Night"}
            </Typography>
          )}
        </Fab>
      </Box>
    </>
  );
};
export default ThemeActionButton;
