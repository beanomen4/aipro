import styled from "styled-components";

const StyledBenefitsSection = styled.section`
  height: 60vh;
  background-color: black;
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

function BenefitsSection() {
  return <StyledBenefitsSection>Benefits</StyledBenefitsSection>;
}

export default BenefitsSection;
