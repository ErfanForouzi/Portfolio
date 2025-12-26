import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Divider, Chip, Typography, Slide } from "@mui/material";
const CustomDivider = ({ bColor, align, cColor, icon, text }) => {

  const theme = useTheme()
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    return () => {
      setLoading(false);
    };
  }, []);

  return (
    <Slide
      direction="up"
      in={loading}
      style={{ transitionDelay: loading ? "300MS" : "0MS" }}
    >
      <Divider
        sx={{
          mt: {
            xs: 4,
            sm: 4,
            md: 0,
            lg: 0,
            xl: 0,
          },
          mb: 2,
          "&::before,&::after": {
            borderColor: bColor,
          },
        }}
        textAlign={align}
      >
        <Chip
          sx={{ p: 3 }}
          color={cColor}
          icon={icon}
          label={
            <Typography
              sx={{ textAlign: "center" }}
              variant="body2"
              color={theme.palette.mode ==="dark"?"black":"whitesmoke"}
            >
              {text}
            </Typography>
          }
        />
      </Divider>
    </Slide>
  );
};
export default CustomDivider;
