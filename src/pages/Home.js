import { Box } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <Box
      sx={{
        border: "0px solid green",
        width: "100%",
        mx: "auto",
        height: "200vh",
      }}
    >
      <Navbar />
      home
    </Box>
  );
}

export default Home;
