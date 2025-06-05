import { Box, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import CardFlip from '../../components/CardFlip';
import dragons from '../../data/dragons';

import dynamic from 'next/dynamic';

const ModelViewer = dynamic(() => import('../../components/ModelViewer'), {
  ssr: false,
});

export async function getStaticPaths() {
  const paths = dragons.map((dragon) => ({
    params: { slug: dragon.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const dragon = dragons.find((d) => d.slug === params.slug);
  return { props: { dragon } };
}

export default function DragonPage({ dragon }) {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" fontWeight="bold" gutterBottom>
        {dragon.name}
      </Typography>

      <Typography variant="h6" align="center" color="text.secondary" gutterBottom>
        Class: {dragon.class}
      </Typography>

      {dragon.isSpecial && (
        <Typography variant="subtitle2" align="center" color="secondary" gutterBottom>
          ⭐ Special Edition
        </Typography>
      )}

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: 'column', md: 'row' }}
        gap={4}
        my={4}
      >
       {dragon.card!=null ? 
       <CardFlip
          frontSrc={dragon.card[0]}
          backSrc={dragon.card[1]}
        />:"Card Coming Soon"}
      </Box>

      <Box
        sx={{
          mt: 4,
          p: 2,
          backgroundColor: '#fdf3e7',
          borderRadius: 2,
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
          {dragon.description}
        </Typography>
      </Box>

      {dragon.location && (
        <Typography
          variant="caption"
          display="block"
          align="center"
          color="text.secondary"
          mt={2}
        >
          🏡 Lives at: {dragon.location}
        </Typography>
      )}

    
       


     {dragon._3dModels?.map((model, index) => (
  <Box key={index} my={4}>
    <Typography variant="subtitle1">Variant {index + 1}</Typography>
    <ModelViewer src={model} alt={`${dragon.name} Model ${index + 1}`} />
  </Box>
))}
          <Box textAlign="center" mt={4}>
        <Link href="/dragons" passHref>
          <Button variant="outlined">← Back to All Dragons</Button>
        </Link>
      </Box>

      <Box>
      </Box>
    </Container>
  );
}
