import './App.css';


import { Outlet, useLocation } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';




function App() {

  const location = useLocation();

  return (
    <>
      {
        location.pathname === '/' ? (<Home/>) : (
          <>
            <Navbar />
            <Outlet />
          </>
        )
      }
    </>
  );
}

export default App;
