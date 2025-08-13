import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './components/style.css'

import MetrosCm from './components/convercoes/MetrosCm'
import CmMetros from './components/convercoes/CmMetros'
import Titulo from './components/Titulo'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Carrosel from './components/Carrosel'
import CalcDollar from './components/convercoes/CalcDollar.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} />
          <Route index element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
