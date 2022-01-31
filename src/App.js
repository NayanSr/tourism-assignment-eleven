import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Tours from './pages/Home/Tours/Tours';
import Booking from './pages/Booking/Booking';
import Login from './pages/Login/Login/Login';
import Header from './pages/Home/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import AuthProvider from './context/AuthProvider';
import Privateroute from './pages/Login/Login/Privateroute/Privateroute';
import AddService from './AddService/AddService';
import ManageItems from './pages/ManageItems/ManageItems';
import AllServices from './pages/AllServices/AllServices';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/tours' element={<Tours />} />
            <Route path='/tours/:tourId' element={<Booking />} />
            <Route path='/login' element={<Login />} />
            <Route path='/addservice' element={<AddService />} />
            <Route path='/allservices' element={<AllServices />} />
            <Route path='/managetour' element={<ManageItems />} />

            <Route path='/about' element={<Privateroute>
              <AboutUs />
            </Privateroute>} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

