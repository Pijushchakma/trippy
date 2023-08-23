import { Box } from "@mui/material";
import React from "react";
import heroImage from "../assets/12.jpg";
import DestinationList from "../components/DestinationList";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home() {
  return (
    <Box
      sx={{
        border: "0px solid green",
        width: "100%",
        mx: "auto",
        height: "200vh",
        position: "relative",
      }}
    >
      <Navbar />
      <HeroSection
        heroImage={heroImage}
        title={"Your Journey Your Story"}
        details={"Choose Your Favourite Destination"}
        showButton={true}
      />
      <DestinationList />
      <Trip />
      <Footer />
    </Box>
  );
}

export default Home;
