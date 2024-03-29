import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Pages/Signup';
import Dashboard from './components/Pages/Dashboard';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
         <div>
            <Routes>
              <Route path='/' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/personal-finance-tracker' element={<Signup />} />
            </Routes>
        </div>
    </BrowserRouter>
    
  )
}

export default App