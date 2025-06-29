import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import type { alertProps } from './interface';

export default function DescriptionAlerts({status, message} : alertProps) {
    console.log(status, message);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Alert severity="error">
        <AlertTitle>Error Status: {status}</AlertTitle>
        {message}
      </Alert>
    </div>
  );
}
