import React from 'react'
import Header from '../../Components/Header/Header'
import HeroDos from './HeroS2'
import ServiciosDos from './ServiciosDos'
import SolucionSOC from './SolucionSoc'
import Contacto from '../../Components/Contacto/Contacto'
import Footer from '../../Components/Footer/Footer'

function ServicioSoc (){
  return (
    <div>
    <Header/>
    <HeroDos/>
    <ServiciosDos/>
    <SolucionSOC/>
    <Contacto/>
    <Footer/>
    </div>
  )
}

export default ServicioSoc
