import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    position="relative"
    p="20px"
  >
    <Typography
      color="#2F3C7E"
      fontWeight="600"
      fontSize="26px"
      fontFamily="Poppins"
    >
      Fitness Club
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      mb="23px"
      mt="30px"
      fontFamily="Poppins"
    >
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontFamily="Poppins" fontSize="22px" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          fontFamily: "Poppins",
          marginTop: "45px",
          textDecoration: "none",
          width: "250px",
          textAlign: "center",
          background: "#2F3C7E",
          padding: "14px",
          fontSize: "22px",
          textTransform: "none",
          color: "white",
          borderRadius: "4px",
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontFamily="Poppins"
      fontWeight={600}
      color="#2F3C7E"
      sx={{
        opacity: "0.1",
        display: { lg: "block", xs: "none" },
        fontSize: "150px",
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
