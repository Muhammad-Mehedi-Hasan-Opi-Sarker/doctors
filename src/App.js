import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Home/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Login from './pages/Login/Login';
import Appoint from './pages/Appoint/Appoint';


function App() {
  return (
    <div className="App max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appoint></Appoint>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
