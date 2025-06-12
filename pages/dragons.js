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
        <Typography variant='h5'> Season 1</Typography>
      {dragons.map((dragon,index) => (
     
                <Link key={dragon.slug} href={`/dragons/${dragon.slug}`} passHref>
                  <ListItem
                    button
                    component="a"
                    sx={{ backgroundColor:'white',
                      borderRadius: 1,
                      px: 2,
                      py: 1,
                      width:'15%', marginLeft:2,
                      
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                      },
                    }}
                  >
                    <Typography variant="body1">{dragon.name} - {String(index).padStart(3,"0")}</Typography>
                  </ListItem>
                </Link>
              ))}
       
        
      
         </List>
    </Box>
  );

    

}