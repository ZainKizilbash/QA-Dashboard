import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <Box sx={{ display: 'flex' , justifyContent: 'center', alignItems: 'center',         height: '100vh', // Full viewport height
}}>
      <CircularProgress />
    </Box>
  );
}
