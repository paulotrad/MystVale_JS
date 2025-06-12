import { Box, Typography, Container, Button, ButtonGroup } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import CardFlip from '../../components/CardFlip';
import dragons from '../../data/dragons';
import BuyButton from '../../components/BuyButton';

const ModelViewer = dynamic(() => import('../../components/ModelViewer'), { ssr: false });

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
  const [view, setView] = useState('original');

const handleBuy = async () => {
  console.log("here");
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: dragon.stripe }),
  });

  if (res.redirected) {
    window.location.href = res.url;
  }
};


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
  gap={4}
  flexDirection={{ xs: 'column', md: 'row' }}
  my={4}
>
  {/* Card */}
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 500 }}>
    {dragon.card ? (
      <CardFlip frontSrc={dragon.card[0]} backSrc={dragon.card[1]} />
    ) : (
      'Card Coming Soon'
    )}
  </Box>

  {/* Model Viewer with toggle */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 400,
      width: '100%',
      maxWidth: 400,
    }}
  >
    <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
      <Button onClick={() => setView('original')}>🧱 Grey Model</Button>
      <Button onClick={() => setView('painted')}>🎨 Painted Model</Button>
    </ButtonGroup>

    <ModelViewer
      src={view === 'original' ? dragon._3dModels[0] : dragon._3dModels[1] || dragon._3dModels[0]}
      alt={`${dragon.name} model`}
    />
  </Box>
</Box>

        

      <Box
        sx={{
          mt: 4,
          p: 3,
          backgroundColor: '#fffbe6',
          borderRadius: 2,
          boxShadow: 2,
          border: '1px dashed #e0b878',
          fontFamily: 'Georgia, serif',
        }}
      >
        <Typography variant="h6" gutterBottom fontWeight="bold">
          {`${dragon.name}'s Tale`}
        </Typography>
        <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.8 }}>
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

      <BuyButton dragonName={"trouble"} priceId={"price_1RZ1cCQwLtC8F1G7ZYgZyNVO"}/>
    

      <Box textAlign="center" mt={4}>
        <Link href="/dragons" passHref>
          <Button variant="outlined">← Back to All Dragons</Button>
        </Link>
      </Box>
    </Container>
  );
}