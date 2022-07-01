import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Home/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About';
import Login from './pages/Login/Login';
import Appoint from './pages/Appoint/Appoint';
import Footer from './pages/Shared/Footer';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='max-w-7xl mx-auto'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<RequireAuth>
          <Appoint></Appoint>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      </div>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
