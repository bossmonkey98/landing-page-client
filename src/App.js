import './App.css';
import { Auth } from './Components/Auth/Auth';
import { Sideblock } from './Components/SideBlock/Sideblock';

function App() {
  return (
    <div className="App">
      <Sideblock/>
     <Auth/>
    </div>
  );
}

export default App;
