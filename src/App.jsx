
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'


import Titulo from './components/Titulo'
import Footer from './components/footer'
import Menu from './components/Menu'
import Carrosel from './components/Carrosel'
import CalcDollar from './components/CalcDollar.jsx'

function App() {
  return (
    <>
      <div className='container'>
        <Titulo />
        <Menu />
        <Carrosel/>
        <CalcDollar />
      </div>
      <Footer />
    </>
  )
}

export default App
