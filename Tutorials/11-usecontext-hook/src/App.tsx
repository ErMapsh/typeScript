import './App.css';
import { ThemeContextProvider } from './context/ThemeContext';
import Box from './components/Box';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
