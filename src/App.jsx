import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './components/style.css'

import MetrosCm from './components/convercoes/MetrosCm'
import CmMetros from './components/convercoes/CmMetros'
import Titulo from './components/Titulo'
import Footer from './components/footer'
import Menu from './components/Menu'
import Carrosel from './components/Carrosel'
import CalcDollar from './components/convercoes/CalcDollar.jsx'

function App() {
  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
        <Carrosel />
        <div className='style'>
          <CmMetros />
          <MetrosCm />
          <CalcDollar />

        </div>

      </div>
      <Footer />
    </>
  )
}

export default App
