import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import { createGlobalStyle } from 'styled-components'

import './App.css'

const GlobalStyles = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  
  return (    
    <>
      <GlobalStyles />
      <BrowserRouter>                      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />                
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
