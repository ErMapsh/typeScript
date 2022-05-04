import React from 'react';
import './App.css';
import { Button } from './Components/Button';
import { Input } from './Components/Input';

function App() {
  return (
    <div className="App">
      <div>
        <Button variant="primary" onClick={() => { console.log("button clicked...") }}>Primary Button</Button>

        <Input/>
      </div>
    </div>
  );
}

export default App;
