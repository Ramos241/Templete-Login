import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Stack justifyContent="flex-start" alignItems="center">
      <Stack width="85%" maxWidth="500px" m={1.5}>
        <Stack textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Welcome
          </Typography>
          <Typography variant="h6">Would you like to?</Typography>
        </Stack>

        <Stack my={3}>
          <Button variant="contained" onClick={() => navigate('/log-in')}>
            Log in
          </Button>
        </Stack>

        <Box>
          <Divider sx={{ color: 'gray' }}>or</Divider>
        </Box>

        <Stack my={3}>
          <Button variant="contained" onClick={() => navigate('/sign-up')}>
            Sign up
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
