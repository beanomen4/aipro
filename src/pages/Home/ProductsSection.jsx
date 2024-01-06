import styled from "styled-components";

const StyledProductsSection = styled.section`
  height: 100vh;
  border-bottom: 1px solid #fff;
  background: no-repeat 0% 50%/100% url("/products-bg.jpg");

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

function ProductsSection() {
  return (
    <StyledProductsSection id="productsSection">Products</StyledProductsSection>
  );
}

export default ProductsSection;
