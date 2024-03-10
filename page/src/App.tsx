import Home from "./Home";
import Navigation from "./Navigation";
import Hotspots from "./Hotspots";
import Cuisine from "./Cuisine";
import Lodging from "./Lodging";
import Activities from "./Activities";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return(
    <Router>
      <Navigation/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Hotspots" element={<Hotspots/>}/>
          <Route path="/Cuisine" element={<Cuisine/>}/>
          <Route path="/Lodging" element={<Lodging/>}/>
          <Route path="/Activities" element={<Activities/>}/>
      </Routes>
    </Router>
  );
}

export default App;
