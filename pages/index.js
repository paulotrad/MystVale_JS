import React from 'react';
import Link from 'next/link';
import { Box, Typography, Container, Button } from '@mui/material';
import Head from 'next/head';
import dragons from '../data/dragons';
import { shopData } from '../data/shop';
export default function HomePage() {
  return (
    <>
      <Head>
        <title>Mystvale</title>
        <meta name="description" content="Paint and collect magical dragons from Mystvale: Dragon Hollow." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Layout */}
      <Box sx={{ backgroundColor: 'black', minHeight: '100vh', py: 6 }}>
        <Container maxWidth="md">
          {/* Hero Section */}
          <Box
            sx={{
              background: 'linear-gradient(to bottom, #fefcfb, #e7e6e6)',
              borderRadius: 3,
              boxShadow: 6,
              p: 4,
              textAlign: 'center',
              mb: 6,
            }}
          >
            <Typography variant="h3" gutterBottom>
              Welcome to Mystvale: Dragon Hollow
            </Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
              Hidden beneath curling clouds and whispering woods,
            </Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic' }}>
              Dragon Hollow is home to the most magical creatures ever painted.
            </Typography>
            <Typography variant="subtitle1" sx={{ fontStyle: 'italic', mb: 1 }}>
              Here, young dragons hatch with a spark of story in their hearts and color on their scales.
            </Typography>
            <Typography variant="body2">~Paint their tale. Discover their world.~</Typography>

            <Link href="/dragons" passHref>
              <Button variant="contained" sx={{ mt: 4 }}>
                Meet the Dragons
              </Button>
            </Link>
          </Box>

          {/* Image */}
          <Box
            component="img"
            src="/images/front.png"
            alt="Mystvale Dragon Banner"
            sx={{
              display: 'block',
              mx: 'auto',
              width: '100%',
              maxWidth: 600,
              borderRadius: 6,
              boxShadow: 8,
            }}
          />

          {/* Shop Section */}
<Box sx={{ mt: 8 }}>
  <Typography variant="h4" align="center" gutterBottom>
    🛍 Featured Shop Kits
  </Typography>

  <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 4,
      mt: 4,
    }}
  >
    {shopData.map((item) => (
      <Link key={item.title} href={item.link} passHref>
        <Box
          component="a"
          sx={{
            width: 200,
            textAlign: 'center',
            textDecoration: 'none',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 4,
            transition: '0.3s',
            backgroundColor: '#fff',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: 6,
            },
          }}
        >
          <Box
            component="img"
            src={item.img}
            alt={item.title}
            sx={{ width: '100%', height: 160, objectFit: 'cover' }}
          />
          <Typography variant="subtitle1" sx={{ p: 2, color: '#222' }}>
            {item.title}
          </Typography>
        </Box>
      </Link>
    ))}
  </Box>
</Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          mt: 'auto',
          p: 2,
          borderTop: '1px solid #ccc',
          boxShadow: 15,
          textAlign: 'center',
          background: 'linear-gradient(to bottom, #fefcfb, #e7e6e6)',
        }}
      >
        <Typography variant="body2">
          Follow us on{' '}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>{' '}
          and{' '}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          .
        </Typography>
        <Typography variant="body2">Contact: support@dragonkits.com</Typography>
      </Box>
    </>
  );
}
