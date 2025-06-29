import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import type { cardData } from '../interface';
import { useContext } from 'react';
import { SearchContext } from '../context/context';
import { Box } from '@mui/material';

export default function ImgMediaCard({data} : cardData) {
  const context = useContext(SearchContext);
  if (!context) throw new Error('Xyz must be used within SearchContext.Provider');

  const {search} = context;
      console.log(search);

  return (
<Box sx ={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
  {data.map((item) => (
    <Card sx={{
    maxWidth: 345,
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      boxShadow: 6,           // stronger shadow on hover
      transform: 'scale(1.05)', // slightly zoom in
    },
  }}
>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.Name}
        </Typography>

        {item.Dependencies.map((api) => (
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {api.APIName}
        </Typography>
        ))}

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.EnvironmentName}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      ))}
    </Box>
  )
}
