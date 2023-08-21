import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "black",
        minHeight: "100px",
        paddingY: "80px",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", md: "80%", lg: "60%" },
          textAlign: "center",
          mx: "auto",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              textAlign: "start",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
              }}
            >
              Trippy
            </Typography>
            <Typography>Choose your favourite destination.</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <FacebookIcon sx={{ cursor: "pointer" }} />
            <GitHubIcon sx={{ cursor: "pointer" }} />
            <LinkedInIcon sx={{ cursor: "pointer" }} />
            <InstagramIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "40px",
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "start",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Project
            </Typography>
            <Typography>Changelog </Typography>
            <Typography> Status </Typography>
            <Typography> License </Typography>
            <Typography> All Versions</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "start",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Community
            </Typography>
            <Typography>Github </Typography>
            <Typography> Issues </Typography>
            <Typography> Project </Typography>
            <Typography> Twitter</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "start",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Help
            </Typography>
            <Typography>Support </Typography>
            <Typography> Troubleshooting </Typography>
            <Typography> Contact Us </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "start",
              gap: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                fontWeight: "500",
              }}
            >
              Others
            </Typography>
            <Typography>Terms of Service </Typography>
            <Typography> Privacy Ploicy </Typography>
            <Typography> License </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
