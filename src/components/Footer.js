import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        marginTop: "2rem",
        backgroundColor: "black",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="white" variant="h5">
              Trippy APP
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="white" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
