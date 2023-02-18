import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Loader = () => (
  <div className="text-center">
    <Button
      variant="contained"
      disabled
      startIcon={<CircularProgress size={20} color="inherit" />}
    >
      Loading
    </Button>
  </div>
);

export default Loader;