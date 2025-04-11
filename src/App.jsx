import React from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Header from './Components/Header/Header'
import Fortinet from './Components/Fortinet/Fortinet'
import Nosotros from './Components/Nosotros/Nosotros'
import Servicios from './Components/Servicios/Servicios'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <div>
      <Header/>
      <Hero />
      <Fortinet />
      <Nosotros/>
      <Servicios/>
      <Contacto/>
      <Footer/>
    </div>
  )
}

export default App
