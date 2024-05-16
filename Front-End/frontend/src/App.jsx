import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home.jsx'
import ContextProvider from './services/ContextProvider.jsx'
function App() {

  return (
    <> 
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
