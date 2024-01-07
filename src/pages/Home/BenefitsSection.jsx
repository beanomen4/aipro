import styled from "styled-components";

import Heading from "./Heading";
import CentralSlider from "./CentralSlider";

const StyledBenefitsSection = styled.section`
  overflow: hidden;
  height: 70vh;
  background-color: #1c1c1c;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    height: 35vh;
  }

  @media (max-width: 780px) {
    min-height: 40vh;
  }

  @media (max-width: 560px) {
    height: auto;
    padding-bottom: 5rem;
  }
`;

function BenefitsSection() {
  return (
    <StyledBenefitsSection id="benefitsSection">
      <Heading boldText="Aipro">Benefits</Heading>
      <CentralSlider />
    </StyledBenefitsSection>
  );
}

export default BenefitsSection;
