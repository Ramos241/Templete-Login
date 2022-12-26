import { Button, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function GoBack() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname !== '/') {
    return (
      <Stack>
        <Stack flexDirection="row" alignItems="center" my={3} onClick={() => navigate('/')}>
          <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIosNewIcon />}>
            Go back
          </Button>
        </Stack>
      </Stack>
    );
  }

  return <Stack />;
}
