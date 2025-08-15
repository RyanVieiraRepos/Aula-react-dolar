import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Routes, Route } from "react-router-dom"



import Layout from './Layout.jsx'
import MetrosCm from './pages/MetrosCm/MetrosCm'
import CmMetros from './pages/CmMetros/CmMetros'
import CalcDollar from './pages/CalcDollar/CalcDollar.jsx'
import Sobre from './pages/Sobre/Sobre.jsx'
import NoPage from './pages/NoPage/NoPage.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >

            <Route index element={<Sobre />} />
            <Route path='CalcDollar' element={<CalcDollar />} />
            <Route path='CmMetros' element={<CmMetros />} />
            <Route path='MetrosCm' element={<MetrosCm />} />
            <Route path='Sobre' element={<Sobre />} />
            <Route path='NoPage' element={<NoPage />} />

          </Route >
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
