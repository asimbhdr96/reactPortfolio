import React from 'react'
import { Route, Routes } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import PortfolioPage from './components/pages/PortfolioPage';
import ContactPage from './components/pages/ContactPage'


const App = () => {
  return(
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/portfolio' element={<PortfolioPage />}></Route>
        <Route path='/contact' element={<ContactPage />}></Route>

    </Routes>

    </>
)
}

export default App
