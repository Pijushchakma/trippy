import { Box } from "@mui/material";
import React from "react";
import aboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Services() {
  return (
    <Box
      sx={{
        border: "0px solid green",
        width: "100%",
        mx: "auto",
        height: "200vh",
        position: "relative",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "cneter",
      }}
    >
      <Navbar />
      <HeroSection
        heroImage={aboutImage}
        title={"Our Services"}
        details={"We are here to help visit your dream destinations"}
      />
      <Trip />

      <Footer />
    </Box>
  );
}

export default Services;
