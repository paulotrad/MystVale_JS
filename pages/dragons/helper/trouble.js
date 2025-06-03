import { Box } from "@mui/material";
import CardFlip from "../../../components/CardFlip";

export default function Trouble() {
  return <div className='p-8'><h1>Trouble Page</h1>
  <Box style={{
        justifyContent: "center",
        alignItems: "center",
        display: 'flex'
      }}>
        <CardFlip
          frontSrc="/cards/trouble_front.png"
          backSrc="/cards/trouble_back.png"
          alt="Lil Trouble"
        />
      </Box>
  </div>;
}
