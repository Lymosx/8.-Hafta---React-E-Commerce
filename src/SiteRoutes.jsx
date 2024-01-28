import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Products from './pages/Products'
import ContactUs from './pages/ContactUs'
import Home from './pages/home'

export default function SiteRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='*' element={<Home/>} />
    </Routes>
  )
}
