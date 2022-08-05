import './App.css';

import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import Signing from './Pages/Signing';
import Dining from './Pages/Dining';
import Hotels from './Pages/Hotels';
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'


import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/dining/" element={<Dining/>}/>
    <Route path="/signing/" element={<Signing/>}/>
    <Route path="/rooms/" element={<Rooms/>}/>
    <Route path="/hotels/" element={<Hotels/>}/>
    </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
