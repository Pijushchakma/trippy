import { Box, Button, Typography } from "@mui/material";
import React from "react";
import heroImage from "../assets/12.jpg";

function HeroSection() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <img
        src={heroImage}
        alt="heroimage"
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "1000",
            backgroundColor: "white",
            "-webkit-background-clip": "text",
            "-webkit-text-fill-color": "transparent",
          }}
        >
          Your Journey Your Story
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "500",
            color: "white",
          }}
        >
          Choose Your Favourite Destination
        </Typography>

        <Button
          variant="contained"
          size="large"
          color="inherit"
          sx={{
            margin: "2%",
            fontWeight: "700",
          }}
        >
          Travel Plan
        </Button>
      </Box>
    </Box>
  );
}

export default HeroSection;
