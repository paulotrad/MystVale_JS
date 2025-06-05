import { useEffect } from 'react';

export default function ModelViewer({ src, alt }) {
  useEffect(() => {
    import('@google/model-viewer');
  }, []);

  return (
    <model-viewer
      src={src}
      alt={alt}
      auto-rotate
      camera-controls
      ar
      shadow-intensity="1"
      style={{ width: '100%', height: '500px', borderRadius: '15px' }}
    />
  );
}