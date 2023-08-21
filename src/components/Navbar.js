import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import MenuIcon from "@mui/icons-material/Menu";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  return (
    <Box
      sx={{
        width: { xs: "90%", md: "75%", lg: "65%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 2,
        marginTop: "2%",
        mx: "auto",
        boxShadow: "-10px 10px 10px -0px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 2,
        zIndex: 100,
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: "2rem",
            }}
          >
            Trippy
          </Typography>
        </Link>

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "row",
            justifyContent: "flex-end",
            width: { sm: "90%", lg: "80%" },
            alignContent: "center",
            alignItems: "center",
            gap: { md: 3, lg: 5, xl: 6 },
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  backgroundColor: "#557A46",
                  color: "white",
                },
                borderRadius: 1,
                justifyContent: "center",
              }}
            >
              <HomeIcon />
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: "1.3rem",
                }}
              >
                Home
              </Typography>
            </Box>
          </Link>

          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  backgroundColor: "#557A46",
                  color: "white",
                },
                borderRadius: 1,
                justifyContent: "center",
              }}
            >
              <InfoIcon />
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: "1.3rem",
                }}
              >
                About
              </Typography>
            </Box>
          </Link>

          <Link
            to="/services"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  backgroundColor: "#557A46",
                  color: "white",
                },
                borderRadius: 1,
                justifyContent: "center",
              }}
            >
              <MedicalInformationIcon />
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: "1.3rem",
                }}
              >
                Services
              </Typography>
            </Box>
          </Link>

          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 0.5,
                "&:hover": {
                  backgroundColor: "#557A46",
                  color: "white",
                },
                borderRadius: 1,
                justifyContent: "center",
              }}
            >
              <PermContactCalendarIcon />
              <Typography
                fontWeight="bold"
                sx={{
                  fontSize: "1.3rem",
                }}
              >
                Contact
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              backgroundColor: "#EEEEEE",
              borderRadius: 2,
              paddingX: "1%",
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
              Sign Up
            </Typography>
          </Box>
        </Box>
        {showMenuIcon ? (
          <MenuIcon
            sx={{ display: { sx: "flex", md: "none" }, cursor: "pointer" }}
            fontSize="large"
            onClick={() => setShowMenuIcon(false)}
          />
        ) : (
          <CloseIcon
            sx={{ display: { sx: "flex", md: "none" }, cursor: "pointer" }}
            fontSize="large"
            onClick={() => setShowMenuIcon(true)}
          />
        )}
      </Box>

      {/* ............mobile menu.................... */}
      <Box
        sx={{
          display: { xs: showMenuIcon ? "none" : "flex", md: "none" },
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          alignContent: "center",
          alignItems: "center",
          gap: "2%",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
              gap: 1,
              "&:hover": {
                backgroundColor: "#557A46",
                color: "white",
              },
              py: "2%",
              justifyContent: "center",
              borderRadius: 1,
            }}
          >
            <HomeIcon />
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: "1.3rem",
              }}
            >
              Home
            </Typography>
          </Box>
        </Link>

        <Link
          to="/about"
          style={{ textDecoration: "none", color: "black", width: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              paddingX: "2%",
              "&:hover": {
                backgroundColor: "#557A46",
                color: "white",
              },
              borderRadius: 1,
              py: "2%",
              justifyContent: "center",
            }}
          >
            <InfoIcon />
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: "1.3rem",
              }}
            >
              About
            </Typography>
          </Box>
        </Link>

        <Link
          to="/services"
          style={{ textDecoration: "none", color: "black", width: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              paddingX: "2%",
              "&:hover": {
                backgroundColor: "#557A46",
                color: "white",
              },
              borderRadius: 1,
              py: "2%",
              justifyContent: "center",
            }}
          >
            <MedicalInformationIcon />
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: "1.3rem",
              }}
            >
              Services
            </Typography>
          </Box>
        </Link>

        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "black", width: "100%" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 1,
              paddingX: "2%",
              "&:hover": {
                backgroundColor: "#557A46",
                color: "white",
              },
              borderRadius: 1,
              py: "2%",
              justifyContent: "center",
            }}
          >
            <PermContactCalendarIcon />
            <Typography
              fontWeight="bold"
              sx={{
                fontSize: "1.3rem",
              }}
            >
              Contact
            </Typography>
          </Box>
        </Link>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
            backgroundColor: "#557A46",
            borderRadius: 2,
            paddingX: "1%",
            py: "2%",
            justifyContent: "center",
            width: "60%",
            cursor: "pointer",
            color: "white",
          }}
        >
          <Typography
            fontWeight="bold"
            sx={{
              fontSize: "1.3rem",
              display: "inline-block",
            }}
          >
            Sign Up
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
