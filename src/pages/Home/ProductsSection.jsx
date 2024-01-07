import styled from "styled-components";

import Heading from "./Heading";
import ProductCard from "./ProductCard";
import productImg from "/src/assets/products/product-img.png";

const StyledProductsSection = styled.section`
  padding-bottom: 4rem;
  background: no-repeat 0% 50%/100% url("/products-bg.jpg");

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledSectionContent = styled.div`
  width: 78%;
  position: relative;

  @media (max-width: 780px) {
    padding-bottom: 5rem;
  }
`;

const SectionImg = styled.div`
  position: absolute;
  top: 8rem;
  right: 12rem;

  img {
    width: 15rem;
  }

  @media (max-width: 920px) {
    top: 12rem;
    right: 5rem;

    img {
      width: 12rem;
    }
  }

  @media (max-width: 780px) {
    top: 10rem;
    right: 2rem;

    img {
      width: 10rem;
    }
  }

  @media (max-width: 560px) {
    top: 22rem;
    right: -5.5rem;

    img {
      width: 8rem;
    }
  }
`;

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
