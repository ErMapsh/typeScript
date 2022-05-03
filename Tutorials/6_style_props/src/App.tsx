import React from 'react';
import './App.css';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Container styles={{padding: 15, margin: 15, fontSize: 25, fontFamily: 'sans-serif', color: 'blue'}}/>
    </div>
  );
}

export default App;
