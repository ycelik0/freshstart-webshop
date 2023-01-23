import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Aside from './components/Aside'

function Root() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <div className="shoppingcart-overlay"></div>
      <Footer />
    </>
  )
}

export default Root
