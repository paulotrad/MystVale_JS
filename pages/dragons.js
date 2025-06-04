import Link from 'next/link';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';
import dragons from '../data/dragons';
  
export default function DragonDefaultPage() {


    return (
  // Group dragons by class

    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Meet the Dragons
      </Typography>
<List disablePadding>
      {dragons.map((dragon) => (
     
                <Link key={dragon.slug} href={`/dragons/${dragon.slug}`} passHref>
                  <ListItem
                    button
                    component="a"
                    sx={{
                      borderRadius: 1,
                      px: 2,
                      py: 1,
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                      },
                    }}
                  >
                    <Typography variant="body1">{dragon.name}</Typography>
                  </ListItem>
                </Link>
              ))}
       
        
      
         </List>
    </Box>
  );

    

}