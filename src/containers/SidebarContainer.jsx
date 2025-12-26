import { useTheme } from "@emotion/react";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";

const SidebarContainer = ({ children }) => {
  const theme = useTheme()
  return (
    <Grid
      xs={0}
      sm={0}
      md={4}
      lg={3}
      xl={3}
      sx={{
        backgroundColor: theme.palette.mode ==="dark"?grey[900]:"white",
        overflowY: "auto",
        overflowX: "hidden",
        height: "100vh",
      }}
    >
      {children}
    </Grid>
  );
};
export default SidebarContainer;
