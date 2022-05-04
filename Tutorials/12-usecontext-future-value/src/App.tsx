
import './App.css';
import { UserContextProvider } from './context/UserContext';// import context api
import { User } from './components/User';// import component

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    </div>
  );
}

export default App;
