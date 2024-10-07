import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import VoucherList from '../components/VoucherList'

const VoucherPage = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle="Vouchers" />
      <VoucherList />
    </Container>
  )
}

export default VoucherPage