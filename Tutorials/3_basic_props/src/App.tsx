import './App.css';
import { Greet } from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {

  const style = { borderWidth: 2, borderColor: 'black', borderStyle: 'solid', width: '50%', padding: 7, display: 'flex', justifyContent: 'center', margin: 5 }

  const PersonName = {
    fname: 'Mahesh',
    lname: 'Mestri'
  }

  const NameList = [
    {
      fname: 'Mahesh',
      lname: 'Mestri',
    },
    {
      fname: 'John',
      lname: 'Twist',
    },
    {
      fname: 'Kelvin',
      lname: 'ghadi',
    },
  ]


  return (
    <div className="App">
      <div style={style}>
        {/* not like pure react, we need pass all props with his right datatypes */}
        <Greet name='ErMapsh' MessageCount={21} loggedin={true} />
      </div>

      <div style={style}>
        {/* another type of props 1.typing in object */}
        <Person PersonName={PersonName} />
      </div>

      <div style={style}>
        {/* another type of props 2.typing in array */}
        <PersonList NameList={NameList}/>
      </div>
    </div>
  );
}

export default App;
