import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Home/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Login from './pages/Login/Login';
import Appoint from './pages/Appoint/Appoint';
import Footer from './pages/Shared/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appoint></Appoint>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
