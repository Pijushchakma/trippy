import { Box, Typography } from "@mui/material";
import React from "react";

function Trip() {
  return (
    <Box
      sx={{
        width: { sx: "95%", md: "80%", lg: "60%" },
        textAlign: "center",
        mx: "auto",
        marginTop: "5%",
      }}
    >
      {" "}
      <Box>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "600",
            marginTop: "5%",
          }}
        >
          Recent Trips
        </Typography>
        <Typography>
          You can discover unique destinations using Google Maps.
        </Typography>
      </Box>
    </Box>
  );
}

export default Trip;
