import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

function TripData({ image, title, details }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box
      sx={{
        width: { xs: "60%", sm: "30%" },
        textAlign: "start",
        boxShadow: "0 5px 25px 2px rgba(0,0,0,0.11)",
        borderRadius: "7px",
        cursor: "pointer",
        padding: "1rem 0.8rem",
        marginBottom: "20px",

        mx: "auto",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box>
        <img
          src={image}
          alt="recentTripImage"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "250px",
            overflow: "hidden",
            borderRadius: "7px",
            transition: "transform 0.3s ease",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
          }}
        />
      </Box>
      <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
        {title}
      </Typography>
      <Typography>{details}</Typography>
    </Box>
  );
}

export default TripData;
