import {  createTheme } from "@mui/material/styles";
export const lightTheme = createTheme({
    direction: "rtl",
    typography:{
      fontFamily:"tanha,vazir,roboto",
      caption:{
        color:"black"
      },
      body1:{color:"black"},
      body2:{color:"black"},
      h6:{color:"black"}
    },
    palette:{
        mode:"light",
        greenCustom: {
          main: '#D2E9E9',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#F8F6F4',
        },
        whiteCustom:{
          main: '#9C27B0',
          light: '#000000',
          dark: '#ffffff',
          contrastText: '#ffffff',
        },
        orangeCustom:{
          main: '#ffa726',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
        blackCustom:{
          main: '#616161',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
        yellowCustom:{
           main: '#fdd835',
           light: '#E3F4F4',
           dark: '#C4DFDF',
           contrastText: '#000000',
         },
        muiCustom:{
          main: '#c5cae9',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#0288D1',
        },
        nextjsCustom:{
          main: '#cfd8dc',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#000000',
        },
        reduxCustom:{
          main: '#b39ddb',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#000000',
        },
       reactCustom:{
          main: '#2962ff',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
       tailwindCustom:{
          main: '#90caf9',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
      sassCustom:{
          main: '#CE93D8',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
        reduxCustom2:{
          main: '#b39ddb',
          light: '#b39ddb',
          dark: '#b39ddb',
          contrastText: '#4527a0',
        },
        nodejsCustom:{
          main: '#008236',
          light: '#008236',
          dark: "#008236",
          contrastText: '#ffffff',
        },
    }
  });

export const darkTheme = createTheme({
    direction: "rtl",
    typography:{
      fontFamily:"tanha,vazir,roboto",
      caption:{
        color:"whitesmoke"
      },
      body1:{color:"whitesmoke"},
      body2:{color:"whitesmoke"},
      h6:{color:"whitesmoke"}
    },
    palette:{
        mode:"dark",
        greenCustom: {
          main: '#D2E9E9',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#F8F6F4',
        },
        whiteCustom:{
          main: '#ffffff',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#673AB7',
        },
        orangeCustom:{
          main: '#e0e0e0',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#000000',
        },
       blackCustom:{
          main: '#424242',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
       yellowCustom:{
          main: '#ffeb3b',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#000000',
        },
        muiCustom:{
          main: '#ffffff',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#0288D1',
        },
        nextjsCustom:{
          main: '#e0e0e0',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#000000',
        },
        reduxCustom:{
          main: '#b39ddb',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#000000',
        },
        reactCustom:{
          main: '#2962ff',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
        tailwindCustom:{
          main: '#90caf9',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
        sassCustom:{
          main: '#CE93D8',
          light: '#E3F4F4',
          dark: '#C4DFDF',
          contrastText: '#ffffff',
        },
        reduxCustom2:{
          main: '#b39ddb',
          light: '#b39ddb',
          dark: '#b39ddb',
          contrastText: '#4527a0',
        },
        nodejsCustom:{
          main: '#008236',
          light: '#008236',
          dark: "#008236",
          contrastText: '#ffffff',
        },
    },
  
  });