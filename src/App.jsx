import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import useStore from './store/store';
import './App.css';
import Board from './components/Board';
import BoardGame from './components/BoardGame';
import SquareBoard from './components/SquareBoard';


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