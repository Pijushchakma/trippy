import { Box, Typography } from "@mui/material";
import React from "react";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import TripData from "./TripData";

function Trip() {
  return (
    <Box
      sx={{
        width: { sx: "95%", md: "80%", lg: "60%" },
        textAlign: "center",
        mx: "auto",
        marginY: "5%",

        alignItems: "center",
        color: "#2a2a2a",
      }}
    >
      {" "}
      <Box sx={{ mx: "auto", marginY: "5%" }}>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
          }}
        >
          Recent Trips
        </Typography>
        <Typography>
          You can discover unique destinations using Google Maps.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: 1,
        }}
      >
        <TripData
          image={image5}
          title={"Venice"}
          details={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
        />
        <TripData
          image={image4}
          title={"Switzerland"}
          details={
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
        />
        <TripData
          image={image3}
          title={"Paris"}
          details={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          }
        />
      </Box>
    </Box>
  );
}

export default Trip;
