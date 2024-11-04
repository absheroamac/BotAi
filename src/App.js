import { Outlet } from "react-router-dom";
import { SideBar } from "./components/common/SideBar";

import { Box } from "@mui/material";

function App() {
  return (
    <Box display={"flex"}>
      <Box width={"18vw"} height={"100vh"}>
        <SideBar />
      </Box>

      <Box
        sx={{
          width: "82vw", // Adjust width here to fill remaining space
          height: "100vh",
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
