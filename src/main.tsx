import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

// Local
import { theme } from './shared/styled-components/theme';
import RouterApp from './router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterApp />
    </ThemeProvider>
  </BrowserRouter>,
);
