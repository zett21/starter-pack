import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  return (
    <Container>
      <BreadCrumb currentPageTitle="Products" />
      <ProductList />
    </Container>
  );
};

export default ProductPage;
