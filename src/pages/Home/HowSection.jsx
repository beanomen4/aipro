import styled from "styled-components";

const StyledHowSection = styled.section`
  height: 60vh;
  background-color: #1c1c1c;
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

function HowSection() {
  return <StyledHowSection>How it works</StyledHowSection>;
}

export default HowSection;
