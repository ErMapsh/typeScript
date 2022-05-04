import React from 'react';
import './App.css';
import { DomRef } from './components/domRef';
import MutableRef from './components/MutableRef';

function App() {
  return (
    <div className="App">
      <DomRef />
      <MutableRef/>
    </div>
  );
}

export default App;
