import { Box } from "@mui/material";

const Page = ({ pageNumber, index, children, ...others }) => {
  return (
    <div
      role="tabpanel"
      hidden={pageNumber !== index}
      id={`sidebar-tab-${index}`}
      aria-labelledby={`tabpanel-${index}`}
      {...others}
    >
      {pageNumber === index && (
        <Box sx={{ height: "100vh", overflow: "hidden"}}>{children}</Box>
      )}
    </div>
  );
};
export default Page;
