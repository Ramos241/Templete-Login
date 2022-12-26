import { CircularProgress, Stack } from '@mui/material';
import { useRef, useEffect } from 'react';
import LoadingBar from 'react-top-loading-bar';
import { StyledGrid } from '../styled-components/PageLoader';

// Local
import { theme } from '../styled-components/theme';

export default function PageLoader() {
  const ref = useRef<any>(null);
  useEffect(() => ref.current.continuousStart());

  return (
    <>
      <LoadingBar color={theme.palette.primary.main} ref={ref} height={3.5} />

      <StyledGrid item xs={12}>
        <Stack height="20vh" justifyContent="center" alignItems="center">
          <CircularProgress size={60} />
        </Stack>
      </StyledGrid>
    </>
  );
}
