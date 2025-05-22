import './App.css';
import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { HomeScreen, ListScreen } from './screens/';
import { theme, GlobalStyle } from 'styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/list" element={<ListScreen />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
