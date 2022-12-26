import { Skeleton } from '@mui/material';

import { StyledGrid } from '../styled-components/Wallpaper';

export function Wallpaper() {
  return (
    <StyledGrid item sx={{ display: { xs: 'none', sm: 'flex' } }} sm={6}>
      <Skeleton variant="rectangular" width="100%" height="100vh" />
    </StyledGrid>
  );
}
