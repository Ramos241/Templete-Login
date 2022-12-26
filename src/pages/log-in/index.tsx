import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Stack, TextField, Typography } from '@mui/material';

export default function LogInPage() {
  return (
    <Stack justifyContent="flex-start" alignItems="center" m={1.5}>
      <Stack width="85%" maxWidth="500px" m={1.5}>
        <Stack textAlign="center">
          <Typography variant="h4" fontWeight="bold">
            Log in
          </Typography>
        </Stack>

        <Grid container my={2} spacing={2}>
          <Grid item xs={12}>
            <TextField fullWidth label="User or email" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Password" />
          </Grid>
        </Grid>

        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Remember on this device?" />
        </FormGroup>

        <Stack my={3}>
          <Button variant="contained">Log in</Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
