import { useContext } from "react";
import MainContext from "../../context/index";
import { Box,Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

const DrawerActionButton = ()=>{
  const {drawerOpen,setDrawerOpen} = useContext(MainContext)
    return(
        <Box
        sx={{
          position:"absolute",
          top:"10px",
          left:"10px",
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          onClick={()=>setDrawerOpen(!drawerOpen)}
          size="small"
          aria-label="Sidebar Fab"
          sx={{
            backgroundColor: "white",
          }}
        >
          <MenuRounded />
        </Fab>
      </Box>
    )
}
export default DrawerActionButton