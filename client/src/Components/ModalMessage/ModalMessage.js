
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { useContext, useEffect } from 'react';
import DataContext from '../../GameContext';
// import { Button } from '@mui/material';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -2;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  -webkit-tap-highlight-color: transparent;
`;


// function ModalMessage({ isReady, setIsReady }) {
//     const { open, CloseModal, Message, Achivement } = useContext(DataContext);
  
//     return (
//       <div>
//         <StyledModal
//           aria-labelledby="unstyled-modal-title"
//           aria-describedby="unstyled-modal-description"
//           open={open}
//           BackdropComponent={Backdrop}
//         >
//           <Box sx={{
//             width: 400,
//             bgcolor: 'lightblue',
//             border: '2px solid #000',
//             p: 2,
//             px: 4,
//             pb: 3,
//             borderRadius: "15px"
//           }}>
//             <h2 id="unstyled-modal-title">Game over {Message} </h2>
//             <p id="unstyled-modal-description">You Lost at level {Achivement.current}</p>
//             <Button
//               size={"Large"}
//               onClick={() => {
//                 const updatedLevel = Achivement.current;
//                 setIsReady(updatedLevel); // Update the ready level for posting
//                 CloseModal(); 
//               }}
//               sx={{ backgroundColor: "darkblue" }}
//             >
//               Click Here to Play Again
//             </Button>
//           </Box>
//         </StyledModal>
//       </div>
//     );
//   }
  
function ModalMessage({ isReady, setIsReady }) {
    const { open, CloseModal, Message, Achivement } = useContext(DataContext);
  
    useEffect(() => {
      if (open) {
        // Update isReady with the current achievement level
        setIsReady(Achivement.current);
      }
    }, [open]);
  
    return (
      <div>
        <StyledModal
          aria-labelledby="unstyled-modal-title"
          aria-describedby="unstyled-modal-description"
          open={open}
          BackdropComponent={Backdrop}
        >
          <Box
            sx={{
              width: 400,
              bgcolor: "lightblue",
              border: "2px solid #000",
              p: 2,
              px: 4,
              pb: 3,
              borderRadius: "15px",
            }}
          >
            <h2 id="unstyled-modal-title">Game over {Message}</h2>
            <p id="unstyled-modal-description">
              You Lost at level {Achivement.current}
            </p>
          </Box>
        </StyledModal>
      </div>
    );
  }

export default ModalMessage;