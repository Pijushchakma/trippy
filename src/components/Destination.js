import { Box, Typography } from "@mui/material";
import React from "react";

function Destination({ firstImage, secondImage, title, details, isReverse }) {
  return (
    <Box
      sx={{
        marginTop: "8%",
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          md: isReverse ? "row-reverse" : "row",
        },
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {/* ..............this box is for heading and description ......................*/}
      <Box
        sx={{
          width: { xs: "60%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          textAlign: "left",
          padding: "2%",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
          {title}
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>{details}</Typography>
      </Box>
      {/* ...........this box is for images........... */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          width: { xs: "60%", md: "50%" },
        }}
      >
        <img
          src={firstImage}
          alt="firstImage"
          style={{
            height: "350px",
            width: "49%",
            objectFit: "cover",
            borderRadius: "6px",
            boxShadow: "-1px 1px -62px -18px rgba(0,0,0,0.19)",
          }}
        />
        <img
          src={secondImage}
          alt="secondImage"
          style={{
            height: "350px",
            width: "49%",
            objectFit: "cover",
            borderRadius: "6px",
            boxShadow: "-1px 1px -62px -18px rgba(0,0,0,0.19)",
            position: "absolute",
            top: "-5%",
            right: 0,
          }}
        />
      </Box>
    </Box>
  );
}

export default Destination;
