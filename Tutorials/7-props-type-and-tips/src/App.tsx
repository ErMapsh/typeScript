import React from 'react';
import './App.css';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  return (
    <div className="App">

      <Person PersonName={{ fname: 'Mahesh', lname: 'Mestri' }} />

      <PersonList NameList={
        [{ fname: 'mahesh', lname: 'mestri'},
        { fname: 'adity', lname: 'shaha' },
        { fname: 'darshu', lname: 'gadhi' }]} />
    </div>
  );
}

export default App;
