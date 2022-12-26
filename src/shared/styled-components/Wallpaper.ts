import styled from '@emotion/styled';
import { Grid } from '@mui/material';

// Local
import backgroundImg from '../assets/background.jpg';

const StyledGrid = styled(Grid)({
  width: '100%',
  minHeight: `100vh`,
  background: `url(${backgroundImg}) no-repeat`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
});

export { StyledGrid };
