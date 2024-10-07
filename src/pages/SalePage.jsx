import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'

const SalePage = () => {
  return (
    <Container>
    <BreadCrumb currentPageTitle="Sales" />
    <div>ProductPage</div>
  </Container>
  )
}

export default SalePage