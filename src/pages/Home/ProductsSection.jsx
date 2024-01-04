import styled from "styled-components";

const StyledProductsSection = styled.section`
  height: 100vh;
  background-color: black;
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

function ProductsSection() {
  return <StyledProductsSection>Products</StyledProductsSection>;
}

export default ProductsSection;
