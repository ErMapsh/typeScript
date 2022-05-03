import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status='success' />
      {/* <Status status='sfsfsfs'/> */}
      {/* when status having unexpected string expect loading,success,error such in situation error occur so we need to fix this, we goona use union in Status Component */}

      {/* -----sometimes we have to pass such thing like this----- */}
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicpario! </Heading>
      </Oscar>


      {/* option type: when we have say MessageCount is optional   */}
      <Greet name='Mapsh' loggedin={true} />
    </div>
  );
}

export default App;
