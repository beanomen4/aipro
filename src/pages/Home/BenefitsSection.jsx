import styled from "styled-components";

import Heading from "./Heading";
import CentralSlider from "./CentralSlider";

const StyledBenefitsSection = styled.section`
  overflow: hidden;
  height: 70vh;
  background-color: #1c1c1c;
  border-bottom: 1px solid #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
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
