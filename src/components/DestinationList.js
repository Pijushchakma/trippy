import { Box, Typography } from "@mui/material";
import React from "react";
import firstImage from "../assets/1.jpg";
import secondImage from "../assets/2.jpg";
import Destination from "./Destination";

function DestinationList() {
  return (
    <Box
      sx={{
        width: { sx: "95%", md: "80%", lg: "60%" },
        textAlign: "center",
        mx: "auto",
      }}
    >
      {/* this box is for heading */}
      <Box>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
            marginTop: "5%",
          }}
        >
          Popular Destinations
        </Typography>
        <Typography>
          Tours give you the opportunity to see a lot, within a time frame
        </Typography>
      </Box>

      {/*...................... Destinations starts here............... */}
      <Destination
        firstImage={firstImage}
        secondImage={secondImage}
        title={"Taal Volcano, Batangas"}
        details={
          "One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and youll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        }
        isReverse={false}
      />
      <Destination
        firstImage={firstImage}
        secondImage={secondImage}
        title={"Taal Volcano, Batangas"}
        details={
          "One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and youll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        }
        isReverse={true}
      />
    </Box>
  );
}

export default DestinationList;
