import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Titulo from './components/Titulo'
import Footer from './components/footer'
import Body from './components/body'
import Carrosel from './components/Carrosel'

function App() {
  return (
    <>
      <div className='container'>
        <Titulo />
        <Body />
        <Carrosel />
      </div>
      <Footer />
    </>
  )
}

export default App
