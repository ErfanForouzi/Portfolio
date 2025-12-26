import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Unstable_Grid2";
import { Box,Typography,Chip,Divider,LinearProgress, Badge } from "@mui/material";
const Skill = ({color,label,icon,value,textColor}) => {
  const theme = useTheme()
  return (
    <Grid xs={12} sx={12} md={6} lg={6} xl={6}>
      <Divider
        textAlign={theme.direction ==="rtl"?"right":"left"}
        sx={{
          "&::before, &::after": {
            borderColor:`${color}.main`,
            borderWidth:"2px"
          },
        }}
      >
        <Chip
          color={color}
          icon={
            <Box
              component="img"
              src={icon}
              sx={{ width: 30, height: 30 }}
            ></Box>
          }
          label={label}
          sx={{ p: 3 ,color:textColor}}
        />
      </Divider>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{minWidth:25,mx:1,my:2}}>
          
        </Box>
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            sx={{ height: 10, borderRadius: 2 }}
            variant="determinate"
            color={color}
            value={value}
          />
        </Box>
      </Box>
    </Grid>
  );
};
export default Skill;
