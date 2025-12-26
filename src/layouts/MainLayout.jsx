import { ThemeProvider } from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import Grid from "@mui/material/Unstable_Grid2";
import { createTheme } from "@mui/material/styles";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
  key: "meaningless-key",
});
const MainLayout = ({ children, title, mode, direction }) => {
  const lightTheme = createTheme({
    direction: direction,
    typography: {
      fontFamily: "tanha,vazir,roboto",
    },
    palette: {
      mode: "light",
      greenCustom: {
        main: "#D2E9E9",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#F8F6F4",
      },
      whiteCustom: {
        main: "#9C27B0",
        light: "#000000",
        dark: "#ffffff",
        contrastText: "#ffffff",
      },
      orangeCustom: {
        main: "#ffa726",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      blackCustom: {
        main: "#616161",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      yellowCustom: {
        main: "#fdd835",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#000000",
      },
      muiCustom: {
        main: "#c5cae9",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#0288D1",
      },
      nextjsCustom: {
        main: "#cfd8dc",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#000000",
      },
      reduxCustom: {
        main: "#b39ddb",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#000000",
      },
      reactCustom: {
        main: "#2962ff",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      tailwindCustom: {
        main: "#90caf9",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      sassCustom: {
        main: "#CE93D8",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      reduxCustom2: {
        main: "#b39ddb",
        light: "#b39ddb",
        dark: "#b39ddb",
        contrastText: "#4527a0",
      },
      nodejsCustom:{
        main: '#00c951',
        light: '#00c951',
        dark: "#00c951",
        contrastText: '#ffffff',
      },
      expressjsCustom:{
        main: '#62748e',
        light: '#314158',
        dark: "#314158",
        contrastText: '#ffffff',
      },
      mysqlCustom:{
        main: '#00a6f4',
        light: '#00a6f4',
        dark: "#00a6f4",
        contrastText: '#ffffff',
      },
    },
  });
  
  const darkTheme = createTheme({
    direction: direction,
    typography: {
      fontFamily: "tanha,vazir,roboto",
      caption: {
        color: "whitesmoke",
      },
      body1: { color: "whitesmoke" },
      body2: { color: "whitesmoke" },
      h6: { color: "whitesmoke" },
    },
    palette: {
      mode: "dark",
      greenCustom: {
        main: "#D2E9E9",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#F8F6F4",
      },
      whiteCustom: {
        main: "#ffffff",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#673AB7",
      },
      orangeCustom: {
        main: "#e0e0e0",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#000000",
      },
      blackCustom: {
        main: "#424242",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      yellowCustom: {
        main: "#ffeb3b",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#000000",
      },
      muiCustom: {
        main: "#ffffff",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#0288D1",
      },
      nextjsCustom: {
        main: "#e0e0e0",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#000000",
      },
      reduxCustom: {
        main: "#b39ddb",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#000000",
      },
      reactCustom: {
        main: "#2962ff",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      tailwindCustom: {
        main: "#90caf9",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      sassCustom: {
        main: "#CE93D8",
        light: "#E3F4F4",
        dark: "#C4DFDF",
        contrastText: "#ffffff",
      },
      reduxCustom2: {
        main: "#b39ddb",
        light: "#b39ddb",
        dark: "#b39ddb",
        contrastText: "#4527a0",
      },
      nodejsCustom:{
        main: '#008236',
        light: '#008236',
        dark: "#008236",
        contrastText: '#ffffff',
      },
      expressjsCustom:{
        main: '#314158',
        light: '#314158',
        dark: "#314158",
        contrastText: '#ffffff',
      },
      mysqlCustom:{
        main: '#00bcff',
        light: '#00bcff',
        dark: "#00bcff",
        contrastText: '#ffffff',
      },
    },
  });
  const theme = mode === "dark" ? darkTheme : lightTheme;
  return (
    <CacheProvider value={direction === "rtl" ? cacheRTL : emptyCache}>
      <ThemeProvider theme={theme}>
        <HelmetProvider>
          <Helmet>
            <title>{title}</title>
          </Helmet>
          
          <Grid container sx={{ height: "100vh" }}>
            {children}
          </Grid>
        </HelmetProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
export default MainLayout;
