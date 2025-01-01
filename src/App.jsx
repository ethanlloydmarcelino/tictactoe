import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NavigationBar from './components/NavigationBar';
import useStore from './store/store';
import SquareBoard from './components/SquareBoard';
import './App.css';

import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
Amplify.configure(amplifyconfig);


export default function App() {
  const {isDark} = useStore();

  const darkTheme = createTheme({
    colorSchemes: {
      dark: isDark,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <>
        <NavigationBar />
        <SquareBoard />
      </>
    </ThemeProvider>
  );
}