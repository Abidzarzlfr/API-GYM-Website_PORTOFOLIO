import React from 'react'
import { Link } from 'react-router-dom';

// UI KIT "React Stack"
import { Stack } from '@mui/material';

import Logo from '../assets/images/fitclub_logo1.png';
import { BorderBottom } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Stack
      // agar sejajar dengan kolom
      direction="row"
      // agar posisi ketengah dan space antar kolom lain
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs: "40px" }, 
            mt: { sm: '32px', xs: '20px' },
            // agar ke kiri
            justifyContent: 'none'
          }}
      px="20px"
      ml="35px"
    >
      <Link to="/">
        <img src={Logo} alt="Logo" style={{
          width: '48px', height: '48px', 
          margin: '0 20px'
        }} />
      </Link>

      <Stack
        // agar sejajar menjadi kolom
        direction="row"
        gap="40px"
        fontSize="24px"
          // agar sejajar
        alignItems="flex-end"
        
      >
        <Link to="/" style={{ 
          textDecoration: 'none', 
          color: "#EAEAEA", 
          borderBottom: '3px solid #FF2E63',
          }}
        >
          Home
        </Link>
        <a href="#exercises" style={{
          textDecoration: 'none', 
          color: '#EAEAEA'
          }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

export default Navbar