import { createContext } from "react";
export default createContext({
  pageNumber: 0,
  drawerOpen: false,
  setDrawerOpen: () => {},
  handlePageNumber: () => {},
  handleThemeChanger:()=>{},
});
