import styled from "styled-components";

const StyledForWhomSection = styled.section`
  height: 100vh;
  background-color: black;
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

function ForWhomSection() {
  return <StyledForWhomSection>For whom</StyledForWhomSection>;
}

export default ForWhomSection;
