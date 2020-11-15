import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header';
import ThemeProvider from '@material-ui/styles/ThemeProvider'

const theme = createMuiTheme({
  typography: {

  },
  palette: {
  },
})



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
    
  );
}

export default App;
