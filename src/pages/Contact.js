import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import React from "react";
import contatImage from "../assets/contactImage.avif";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 97%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 5px 5px 5px 5px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${
        theme.palette.mode === "dark" ? blue[500] : blue[200]
      };
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);

function Contact() {
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
        heroImage={contatImage}
        title={""}
        details={""}
        showButton={false}
      />

      {/* ...................Our History Section..................... */}
      <Box
        sx={{
          width: { xs: "70%", sm: "60%", md: "50%" },
          display: "flex",
          flexDirection: "column",
          gap: 2,
          marginY: "50px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "2rem", fontWeight: "600" }}>
          Send a message to us!
        </Typography>
        <TextField
          id="outlined-size-normal"
          placeholder="name"
          sx={{
            width: "100%",
          }}
          size="small"
        />
        <TextField
          id="outlined-size-normal"
          placeholder="email"
          sx={{
            width: "100%",
          }}
          size="small"
        />
        <TextField
          id="outlined-size-small"
          placeholder="subject"
          size="small"
          sx={{
            width: "100%",
          }}
        />
        <StyledTextarea
          aria-label="minimum height"
          minRows={3}
          placeholder="Message"
        />
        <Box
          sx={{
            backgroundColor: "#EEEEEE",
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "black",
              color: "white",
            },
            padding: "10px",
            width: "97%",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: "1.3rem",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            Sumbit
          </Typography>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Contact;
