import './App.css';
import {Outlet, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Link to= "/" >iStocks</Link> | {" "}
      <Link to= "stocks">Stocks</Link> | {" "} */}
      <Link to= "about">About</Link>  {" "}
      <Link to= "services">Services</Link> {" "}
      <Link to= "tips">Tips</Link> {" "}
      <Link to= "products">Products</Link> {" "}
      <Link to= "profile">Profile</Link>
      <Outlet/>
    </div>
  );
}

export default App;