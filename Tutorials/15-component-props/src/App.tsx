import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Private } from './components/auth/Private';
import Profile from './components/auth/Profile';

function App() {
  return (
    <div className="App">
     <Private isLoggedIn={true} Component={Profile}/>
    </div>
  );
}

export default App;
