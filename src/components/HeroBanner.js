import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

// import image
import HeroBannerImage from '../assets/images/banner1.png';
import { Padding } from '@mui/icons-material';

const HeroBanner = () => {
  return (
    <Box
        sx={{
            // xs = untuk extra small device
            mt: { lg: '212px', xs: '70px' },
            ml: { sm: '50px'}
        }} 
        position="relative" p="20px"
    >
        <Typography
            color="#FF2E63"
            fontWeight="600"
            fontSize="26px"
        >
            Fitness Club
        </Typography>

        <Typography
            fontWeight={700}
            sx={{ 
                fontSize: { lg: '44px', xs: '40px'}
             }}
            mb="23px"
            mt="30px"
            color="#08D9D6"
        >
            Train, Rest <br /> and Repeat
        </Typography>

        <Typography
            fontSize="22px"
            lineHeight="35px"
            mb={4}
            color="#EAEAEA"
        >
            Check out the most effective exercises
        </Typography>

        {/* Button Explore Exercise */}
        <Button
            variant='contained'
            color='error'
            href="#exercises"
            sx={{ 
                backgroundColor: '#FF2E63',
                padding: '10px'
             }}
        >
            Explore Exercises
        </Button>

        <Typography
            fontWeight={600}
            color="#FF2E63"
            sx={{
                opacity: 0.1,
                // mobile devices
                display: { lg: 'block', xs: 'none'} 
            }}
            fontSize="200px"
        >
            Exercise
        </Typography>

        {/* Image Home */}
        <img 
            src={HeroBannerImage} 
            alt="banner" 
            className="hero-banner-img"
        />
    </Box>
  )
}

export default HeroBanner