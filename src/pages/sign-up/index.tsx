import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';

export default function SignUpPage() {
  return (
    <Stack justifyContent="flex-start" alignItems="center">
      <Stack width="85%" maxWidth="500px" m={1.5}>
        <Stack textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Create Account
          </Typography>
          <Typography variant="h6">
            Already have an account? <Link to="#">Sign in</Link>
          </Typography>
        </Stack>

        <Stack my={3}>
          <Button variant="contained" startIcon={<GoogleIcon />}>
            Sign up with Google
          </Button>
        </Stack>

        <Box>
          <Divider sx={{ color: 'gray' }}>or</Divider>
        </Box>

        <Grid container my={2} spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="First name" />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField fullWidth label="Last name" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Phone number" />
          </Grid>
        </Grid>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Typography>
                I Agree to the <Link to="#">Terms of Services</Link> and <Link to="#">Privacy Statement</Link>
              </Typography>
            }
          />
        </FormGroup>

        <Stack my={3}>
          <Button variant="contained">Sign up with email</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
