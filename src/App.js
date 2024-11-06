import { Outlet } from "react-router-dom";
import { SideBar } from "./components/common/SideBar";
import { useState } from "react";
import { Drawer } from "@mui/material";

import { Box } from "@mui/material";

function App() {
  const [responses, setResponses] = useState([]);
  const [open, setOpen] = useState(false);

  return (
    <Box display={"flex"}>
      <Box
        width={{ width: "20vw" }}
        height={"100vh"}
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <SideBar setResponses={setResponses} />
      </Box>

      <Box
        sx={{
          width: { xs: "100vw", md: "82vw" },
          height: "100vh",
          background:
            "linear-gradient(180deg, rgba(215, 199, 244, 0.2) 0%, rgba(151, 133, 186, 0.2) 100%)",
        }}
      >
        <Outlet context={{ responses, setResponses, open, setOpen }} />
      </Box>

      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: { xs: "80vw", sm: "40vw", md: "20vw" } }}>
          <SideBar popup setOpen={setOpen} />
        </Box>
      </Drawer>
    </Box>
  );
}

export default App;
