import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RandomNumber } from './components/RandomNumber';

function App() {
  return (
    <div className="App">
      {/* here we goona do if value is positive then only we pass isPositive is true not isNegative, isZero */}
      <RandomNumber value={3} isPositive={true} />
    </div>
  );
}

export default App;
