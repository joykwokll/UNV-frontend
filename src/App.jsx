import './App.css';
import {Outlet, Link} from 'react-router-dom'
import HeaderBar from './views/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <HeaderBar/>

      <Outlet/>
    </div>
  );
}

export default App;