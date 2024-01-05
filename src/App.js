import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Pages/Signup';
import Dashboard from './components/Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
         <div>
            <Routes>
              <Route path='/' element={<Signup />} />
              <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
        </div>
    </BrowserRouter>
    
  )
}

export default App