import styled from "styled-components";

const StyledHeading = styled.h2`
  display: block;
  padding: 4rem 0 6.5rem 0;
  color: var(--color-grey-0);
  font-size: 5.2rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
`;

const BoldText = styled.span`
  color: var(--color-primary);
  font-weight: 700;
`;

function Heading({ boldText, children }) {
  return (
    <StyledHeading>
      {children} <BoldText>{boldText}</BoldText>
    </StyledHeading>
  );
}

export default Heading;
