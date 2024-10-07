import React from 'react'
import Container from './Container'

const Header = () => {
  return (
    <header className='mb-5'>
        <Container>
           <h1 className='text-3xl font-montserrat '>Voucher App</h1>
           <p className='text-xl text-stone-300'>MMS IT Software</p>
        </Container>
    </header>
  )
}

export default Header