import { Box, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';

import { shopData } from '../data/shop';

export default function ShopIndex() {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>Shop Kits</Typography>
      <Grid container spacing={4}>
        {shopData.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.slug}>
            <Link href={`/shop/${item.slug}`} passHref>
              <Box
                component="a"
                sx={{
                  textDecoration: 'none',
                  border: '1px solid #ccc',
                  borderRadius: 2,
                  overflow: 'hidden',
                  display: 'block',
                  '&:hover': { boxShadow: 4 },
                }}
              >
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <Box sx={{ p: 2 }}>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2">{item.description}</Typography>
                </Box>
              </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}