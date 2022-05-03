import './App.css';
import { Button } from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">

      <Button
        // here function and gets event and id as parameter
        // Button and here is function that pass to the button component
        handleClickFunction={(event, id) => {
          console.log("Button Clicked:", event, "id is:", id)
          alert("button clickeedddddddd")
        }}
      />

      <Input value='' handleOnChangeFunction={(event, id)=>{
        
      }}/>
    </div>
  );
}

export default App;
