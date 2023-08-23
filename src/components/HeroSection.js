import { Box, Button, Typography } from "@mui/material";
import React from "react";

function HeroSection({ heroImage, title, details, showButton }) {
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
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "500",
            color: "white",
          }}
        >
          {details}
        </Typography>
        {showButton ? (
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
        ) : null}
      </Box>
    </Box>
  );
}

export default HeroSection;
