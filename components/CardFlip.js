// components/CardFlip.js

import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export default function CardFlip({ frontSrc, backSrc, alt = "Card" }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div onClick={() => setIsFlipped(true)} style={{ cursor: 'pointer' }}>
        <img src={frontSrc} alt={`${alt} Front`} width={250} height={350} />
      </div>

      <div onClick={() => setIsFlipped(false)} style={{ cursor: 'pointer' }}>
        <img src={backSrc} alt={`${alt} Back`} width={250} height={350} />
      </div>
    </ReactCardFlip>
  );
}
