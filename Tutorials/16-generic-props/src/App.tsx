import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';

function App() {
  return (
    <div className="App">
      {/* type is string */}
      <List itmes={["mahesh", "mestri", "is", "good", "boy"]} onclick={(item) => { console.log(item) }} />

      {/* type is int */}
      <List itmes={[1, 2, 3, 4]} onclick={(item) => { console.log(item) }} />

      {/* type is object  */}
      {/* <List itmes={[
        {fname: "mahesh", lname: "mestri"},
        {fname: "er", lname: "mapsh"},
        {fname: "Er", lname: "Mapsh"},]} onclick={(item) => { console.log(item) }} /> */}
    </div>
  );
}

export default App;
