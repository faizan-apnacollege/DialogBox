import React, { useState } from 'react';
import { Button } from '@mui/material';
import SessionDialog from './SessionDialog';


const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Session Dialog
      </Button>
      <SessionDialog open={open} onClose={handleClose} />

    </div>
  );
};

export default App;
