import { useContext } from "react";
import { useTheme } from "@emotion/react";
import MainContext from "../../context/index";
import { Tabs, Tab, Typography, useMediaQuery } from "@mui/material";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const SidebarTabs = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const {
    pageNumber,
    handlePageNumber,
    setDrawerOpen,
  } = useContext(MainContext);

  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  const tabs = [
    {
      label:
        theme.direction === "rtl" ? (
          <Typography
            sx={{
              mt: 1,
            }}
            variant="body2"
          >
            صفحه اصلی
          </Typography>
        ) : (
          <Typography
            variant="body2"
            sx={{
              mt: 1,
            }}
          >
            Home
          </Typography>
        ),
      icon: <HomeRounded sx={{mt:theme.direction ==="rtl"?1:0}} />,
      ...tabProps(0),
    },
    {
      label:
        theme.direction === "rtl" ? (
          <Typography variant="body2">درباره من</Typography>
        ) : (
          <Typography variant="body2" sx={{ mt: 1 }}>
            About Me
          </Typography>
        ),
      icon: <FaceRounded />,
      ...tabProps(1),
    },
    {
      label:
        theme.direction === "rtl" ? (
          <Typography variant="body2">رزومه من</Typography>
        ) : (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Resume
          </Typography>
        ),
      icon: <TextSnippetRounded />,
      ...tabProps(2),
    },
    {
      label:
        theme.direction === "rtl" ? (
          <Typography variant="body2">نمونه کارها</Typography>
        ) : (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Samples
          </Typography>
        ),
      icon: <TerminalRounded />,
      ...tabProps(3),
    },
    {
      label:
        theme.direction === "rtl" ? (
          <Typography variant="body2">ارتباط با من</Typography>
        ) : (
          <Typography variant="body2" sx={{ mt: 1 }}>
            Contact Me
          </Typography>
        ),
      icon: <ConnectWithoutContactRounded />,
      ...tabProps(4),
    },
  ];

  return (
      <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      onChange={handlePageNumber}
      indicatorColor="secondary"
      textColor="secondary"
      sx={{height:isMdUp?"auto":"100%"}}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="end"
          {...tab}
          sx={{
            width:"100%",
            backgroundColor:
              theme.palette.mode === "dark" ? grey[800] : grey[200],
            mx: "auto",
            my: 0.5,
            borderRadius: 2,
            "&.MuiTab-root": {
              minHeight: isMdUp?40:60,
            },
          }}
          onClick={() => setDrawerOpen(false)}
        />
      ))}
    </Tabs>
  );
};
export default SidebarTabs;
