import React, { useState, Suspense, lazy} from 'react'
import '@styles/App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import ContextProvider from './services/context/ContextProvider.jsx'

const Home = lazy(()=>import('@pages/home/Home.jsx'))

function App() {

  return (
    <> 
      <BrowserRouter>
        <ContextProvider>
          <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            
            <Route path="/" element={<Home />} />
           
          </Routes>
          </Suspense>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
