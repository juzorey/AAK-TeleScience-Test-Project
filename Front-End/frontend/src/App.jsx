import React, { useState } from 'react'
import '@styles/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '@pages/home/Home.jsx'
import ContextProvider from './services/context/ContextProvider.jsx'
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
