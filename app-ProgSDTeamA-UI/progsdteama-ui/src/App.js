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
import RideRent from './app-Components/RideRent'
import VehicleSelection from './app-Components/VehicleSelection'
import RideReturn from './app-Components/RideReturn'
import RideReport from './app-Components/RideReport-backup'


function App() {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home' element={<RideRent/>}/>
      <Route exact path='/rented' element={<RideReturn/>}/>
    </Routes>
  </Router>
  );
}

export default App;

