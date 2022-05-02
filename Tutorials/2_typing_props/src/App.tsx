import './App.css';
import { Greet } from '../src/components/Greet'
function App() {
  return (
    <div className="App">
      <Greet name="ErMapsh"/>

      {/* -----used type for application and interfaces for libraries----  */}
      {/* u need to pass a props as string that we define in component propstype otherwise we will get an error*/}
      {/* <Greet name={10}/> */}
    </div>
  );
}

export default App;
