import { useContext } from "react";
import { useTheme } from "@emotion/react";
import MainContext from "../context";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { LanguageRounded } from "@mui/icons-material";
const DirectionActionButton = () => {
  const theme = useTheme();
  const { handleDirectionChanger } = useContext(MainContext);

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: "100",
        top: {
          xs: "0",
          sm: "0",
          md: "10px",
        },
        right: {
          xs: "0",
          sm: "0",
          md: "0",
        },
      }}
    >
      <Box>
        <FormControl
          color="secondary"
          sx={{
            minWidth: {
              xs: 72,
              sm: 72,
              md: 75,
              lg: 82,
              xl: 84,
            },
            color: "black",
          }}
        >
          <InputLabel sx={{ display: "flex" }}>
            <LanguageRounded />
          </InputLabel>
          <Select
            labelId="language"
            id="language"
            label="Language"
            value={theme.direction}
            onChange={(e) => {
              handleDirectionChanger(e.target.value);
            }}
            sx={{
              backgroundColor:
                theme.palette.mode === "dark" ? "black" : grey[200],
              color: theme.palette.mode === "dark" ? "whitesmoke" : "black",
            }}
          >
            <MenuItem sx={{ color: "#a780cc" }} value={"ltr"}>
              {theme.direction === "rtl" ? "انگلیسی" : "En"}
            </MenuItem>
            <MenuItem sx={{ color: "#a780cc" }} value={"rtl"}>
              {theme.direction === "rtl" ? "فارسی" : "Persian"}
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
export default DirectionActionButton;
