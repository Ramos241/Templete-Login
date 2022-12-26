import { Grid, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { StyledGrid } from '../../shared/styled-components/StyledGrid';
import { Wallpaper } from '../../shared/components/Wallpaper';
import { GoBack } from '../../shared/components/GoBack';

export default function WallpaperLogin() {
  return (
    <Grid container minHeight="100vh">
      <StyledGrid item xs={12} sm={6}>
        <GoBack />
        <Outlet />
        <Stack />
      </StyledGrid>

      <Wallpaper />
    </Grid>
  );
}
