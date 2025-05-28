// components/Footer.js
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';

import * as React from 'react';
import { Facebook, Instagram } from '@mui/icons-material';
export default function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={100} style={{backgroundColor:'purple'}}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{backgroundColor:'purple'}}
      >
          <Box sx={{ display: 'flex', alignItems: 'center',justifyItems:'left', gap: 2 }}>
        <Box sx={{ fontWeight: 'light' }}>Visit us on the sites</Box>
        <BottomNavigationAction label="Instagram" icon={<Instagram />} href='https://www.google.com'/>
        <BottomNavigationAction label="Facebook" icon={<Facebook />} />
      </Box>
      </BottomNavigation>
    
    </Paper>
    );
  }
  