import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/fitclub_logo.png';

const Footer = () => {
  return (
    <Box mt="90px" bgcolor="#08D9D6">
      <Stack
        gap="40px"
        alignItems="center"
        px="40px"
        pt="60px"
        pb="40px"
      >
          <img src={Logo} alt='logo' width="200px" height="40px" />
          <Typography variant='h6' pb='40px' fontWeight='bold' textAlign="center">
            Made by <br/>@Abidzarzlfr
          </Typography>
      </Stack>
    </Box>
  )
}

export default Footer