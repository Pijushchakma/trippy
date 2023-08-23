import { Box, Typography } from "@mui/material";
import React from "react";
import aboutImage from "../assets/night.jpg";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

function About() {
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
        title={" A Travel Agency"}
        details={"We are here to help visit your dream destinations"}
      />
      {/* ...................Our History Section..................... */}
      <Box
        sx={{
          width: { xs: "90%", md: "75%", lg: "65%" },
          display: "flex",
          flexDirection: "column",
          gap: 5,
          marginY: "50px",
        }}
      >
        <Box>
          <Typography variant="h3" color="initial">
            {" "}
            Our History
          </Typography>
          <Typography sx={{ textAlign: "justify", marginY: "20px" }}>
            Trippy is owned and managed by Trippy .In Pvt. Ltd., a leading brand
            in web designing services and e-commerce solutions. Trippy .In Pvt.
            Ltd. is counted for its expertise in web solutions and its top
            ranking business portals. Our invincible expertise and rich
            experience has raised our spirit to reach ahead from our client's
            expectation. Commendable success rate of other portals managed by
            Trippy is a live paradigm of our work excellence.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" color="initial">
            {" "}
            Our Mission
          </Typography>
          <Typography sx={{ textAlign: "justify", marginY: "20px" }}>
            Our mission is to touch the horizon where our capabilities may
            successfully meet with the requirements of our clients, that too
            with ultimate transparency and cost-effectiveness.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h3" color="initial">
            {" "}
            Our Vision
          </Typography>
          <Typography sx={{ textAlign: "justify", marginY: "20px" }}>
            To sow the seeds of par-excellence services with customer centric
            approach and reap the trust of worldwide clients.
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default About;
