import React from 'react';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemText, IconButton, Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Image, Title } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import Button from '@mui/material';
import Head from 'next/head';
export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuItems = [
    { text: 'Shop', href: '/shop' },
    { text: 'How It Works', href: '/how-it-works' },
    { text: 'Meet the Dragons', href: '/dragons' },
    { text: 'Host or Join a Party', href: '/party' },
    { text: 'Gallery & Community', href: '/gallery' },
    { text: 'Blog or News', href: '/blog' },
  ];

  return (
    <>
<Head>
  <title>Mystvale</title>
  <meta name="description" content="Paint and collect magical dragons from Mystvale: Dragon Hollow." />
  <link rel="icon" href="/favicon.ico" />
</Head>    <Box sx={{ display: 'flex', minHeight: '100vh' , backgroundColor:'black'}}>

      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{
          sx: {
            backgroundColor:'lightgrey',
            width: open ? 240 : 60,
            transition: 'width 0.3s',
            overflowX: 'hidden',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: open ? 'flex-end' : 'center', p: 1 }}>
          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            
          <ListItem
          button
          key={index}
          component={Link}
          href={item.href}
          sx={{
            '&:hover': {
              backgroundColor: '#d3e0ea',
              borderRadius: 1,
            },
            mx: 1,
            my: 0.5,
          }}
        >
          {open && (
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontFamily: 'Comic Sans MS, cursive',
                fontWeight: 500,
              }}
            />
          )}
        </ListItem>
          ))}
        </List>
      </Drawer>
   
      <Box
  sx={{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    transition: 'margin-left 0.3s',
    //marginLeft: open ? '240px' : '60px'
  }}
>        <Box
  sx={{

    textAlign: 'center',
    background: 'linear-gradient(to bottom, #fefcfb, #e7e6e6)',
    borderRadius: 2,
    boxShadow: 3,
    mx: 'auto',
    width: '100%',
    borderWidth:3,
  }}
>
          <Typography  variant="h4" >
            Welcome to Mystvale: Dragon Hollow
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
    Hidden beneath curling clouds and whispering woods,
  </Typography>
  <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
    Dragon Hollow is home to the most magical creatures ever painted.
  </Typography>
  <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
    Here, young dragons hatch with a spark of story in their hearts and color on their scales.
  </Typography>
  
             <Typography variant="body2">
            ~Paint their tale. Discover their world.~
          </Typography>
        </Box>
        <Box
    component="img"
    src="/images/front.png"
    alt="Mystvale Dragon Banner"
    sx={{ width: '50%', maxHeight: 600,alignSelf:'center', objectFit: 'contain', mb: 2 ,backgroundColor:'black',borderRadius:15}}
  />
     
      </Box>
    </Box>
    <Box component="footer" sx={{ mt: 'auto', p: 2, borderTop: '1px solid #ccc', borderWidth:3, boxShadow: 15,
      textAlign: 'center' ,background: 'linear-gradient(to bottom, #fefcfb, #e7e6e6)', 
      borderRadius:1}}>
          <Typography variant="body2">
            Follow us on <a href="https://instagram.com" target="_blank">Instagram</a> and <a href="https://facebook.com" target="_blank">Facebook</a>.
          </Typography>
          <Typography variant="body2">Contact: support@dragonkits.com</Typography>
        </Box>
    </>
  );
}
