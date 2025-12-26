
import { Divider } from "@mui/material";
import { grey } from "@mui/material/colors";

import {SidebarHeader,SidebarFooter,SidebarTabs} from ".";

const SidebarContent = () => {
  return (
    <>
      <SidebarHeader />
      <Divider variant="middle" sx={{ color: grey[900], my: 1 }} />
      <SidebarTabs/>
      <Divider variant="middle" sx={{ color: grey[900], my: 1 }} />
      <SidebarFooter />
    </>
  );
};
export default SidebarContent;
