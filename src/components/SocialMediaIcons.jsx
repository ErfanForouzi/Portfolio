import { GitHub, Instagram, Telegram, WhatsApp,LinkedIn } from "@mui/icons-material";
import { Box,IconButton } from "@mui/material";
const SocialMediaIcons = ()=>{
    return(
        <Box>
        <IconButton aria-label="Github">
          <a href="https://github.com/ErfanForouzi" target="_blank" rel="noopener noreferrer">
            <GitHub sx={{color:"grey"}}/>
          </a>
        </IconButton>
        <IconButton aria-label="LinkedIn">
          <a href="https://www.linkedin.com/in/erfan-forouzi-b2892227b/" target="_blank" rel="noopener noreferrer">
            <LinkedIn sx={{color:"#0288D1"}}/>
          </a>
        </IconButton>
      </Box>
    )
}
export default SocialMediaIcons