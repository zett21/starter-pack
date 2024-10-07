import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <section className='flex flex-col min-h-screen p-5'>
        <Header/>
        <Outlet/>
        </section>
       

    </main>
  )
}

export default Layout