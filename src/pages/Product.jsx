import styled from "styled-components";
import ProductList from "../features/product/ProductList"
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const StyledProductsContainer = styled.div`
  width: 100%;
  padding: 40px;
  min-height: 90vh;
  position: relative;
`

function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  useEffect(() => {
    if (!searchParams.get("page")) {
      searchParams.set("page", 1);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams])

  return (
    <StyledProductsContainer>
      <ProductList />
    </StyledProductsContainer>
  )
}

export default Product