import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Redirect,
  UNSAFE_enhanceManualRouteObjects,
} from "react-router-dom";
import Login from './app-Components/Login'
import Home from './app-Components/RideRent'

function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home' element={<Home/>}/>
     
    </Routes>
  </Router>
  );
}

export default App;

