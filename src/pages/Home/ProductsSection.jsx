import styled from "styled-components";

import Heading from "./Heading";
import ProductCard from "./ProductCard";
import productImg from "/src/assets/products/product-img.png";

const StyledProductsSection = styled.section`
  height: 100vh;
  border-bottom: 1px solid #fff;
  background: no-repeat 0% 50%/100% url("/products-bg.jpg");

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSectionContent = styled.div`
  width: 78%;
  height: 45rem;
  position: relative;
`;

const SectionImg = styled.div`
  position: absolute;
  top: 8rem;
  right: 12rem;
  
  img {
    width: 15rem;
  }
`

function ProductsSection() {
  return (
    <StyledProductsSection id="productsSection">
      <Heading boldText="Products">Our</Heading>
      
      <StyledSectionContent>
        <ProductCard />
        <SectionImg>
          <img src={productImg} alt="Section image rocket" />
        </SectionImg>
      </StyledSectionContent>
    </StyledProductsSection>
  );
}

export default ProductsSection;
