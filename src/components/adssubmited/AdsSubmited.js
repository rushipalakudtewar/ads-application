// AdsSubmitted.js
import React, { useEffect } from 'react';
import { Dialog, Button, Typography, CircularProgress } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function AdsSubmitted({ onClose }) {
  useEffect(() => {
    // After 0.6 seconds, show the dialog
    const timeoutId = setTimeout(() => {
      onClose(); // Close the dialog
    }, 600);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <Dialog open>
      <div className='flex flex-col items-center p-20'>
        <CheckCircleOutlineIcon className=' text-blue-500' style={{fontSize:'60px'}}/>
        <Typography variant="h6">Submitted Successfully!</Typography>
        <CircularProgress color="primary" size={40} />
        <Typography variant="body2">Please wait...</Typography>
      </div>
    </Dialog>
  );
}

export default AdsSubmitted;
