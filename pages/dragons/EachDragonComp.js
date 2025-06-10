   
   export default function Dragon({ dragon }) {
     const [view, setView] = useState('original');


     return (
   <>
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

      <Box textAlign="center" mt={4}>
        <Link href="/dragons" passHref>
          <Button variant="outlined">← Back to All Dragons</Button>
        </Link>
      </Box>
    </>
  );
   }