import React from 'react'
import { Route, Routes } from "react-router-dom";
import Navigation from './components/Navigation';
import HomePage from './components/pages/HomePage';
const App = () => {
  return(
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {/* <Route path='/portfolio' element={<Portfolio />}></Route>
        <Route path='/contact' element={<Contact />}></Route> */}

    </Routes>

    </>
)
}

export default App
