import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import { createGlobalStyle } from 'styled-components'

import './App.css'
import MainTemplate from './pages/templates/MainTemplate'
import Header from './pages/Header'

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
        <MainTemplate>

          <Header />

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/detail" element={<Detail />} />                
          </Routes>

        </MainTemplate>                             
      </BrowserRouter>
    </>
  )
}

export default App
