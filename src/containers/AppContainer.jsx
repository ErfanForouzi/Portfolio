import { useEffect, useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { Sidebar } from "../components/sidebar";
import MainLayout from "../layouts/MainLayout";
import MainContext from "../context/index";
import Page from "../components/pages/Page";
import { DrawerActionButton } from "../components/drawer";
import { Contact, Courses, Resume, About, Home } from "../pages";
import { PageContainer, SidebarContainer } from "../containers";
const AppContainer = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState();
  const [direction, setDirection] = useState("rtl");



  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };
  const handleThemeChanger = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const handleDirectionChanger = (value) => {
    setDirection(value);
  };

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  useEffect(() => {
    setMode("dark");
  }, []);

  useEffect(() => {
    document.dir = direction;
  }, [direction]);

  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        drawerOpen,
        setDrawerOpen,
        handleThemeChanger,
        handleDirectionChanger,
      }}
    >
      <MainLayout
        direction={direction}
        mode={mode}
        title="وبسایت شخصی عرفان فروزی"
      >
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PageContainer>
            <Page pageNumber={pageNumber} index={0}>
              <Home title="وب سایت عرفان فروزی" />
            </Page>
            <Page pageNumber={pageNumber} index={1}>
              <About
                title={
                  theme.direction === "ltr"
                    ? "About Me | Erfan Forouzi Website"
                    : "وب سایت عرفان فروزی |  درباره من"
                }
              />
            </Page>
            <Page pageNumber={pageNumber} index={2}>
              <Resume title="وب سایت عرفان فروزی |  رزومه من" />
            </Page>
            <Page pageNumber={pageNumber} index={3}>
              <Courses title="وب سایت عرفان فروزی |  نمونه کارها" />
            </Page>
            <Page pageNumber={pageNumber} index={4}>
              <Contact title="وب سایت عرفان فروزی |  ارتباط با من" />
            </Page>
        </PageContainer>
      </MainLayout>
    </MainContext.Provider>
  );
};

export default AppContainer;
