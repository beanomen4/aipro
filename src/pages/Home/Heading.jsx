import styled from "styled-components";

const StyledHeading = styled.h2`
  padding: ${(props) => `${props.padding || "4rem 0 6.5rem 0"}`};

  display: block;
  color: var(--color-grey-0);
  font-size: 5.2rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 560px) {
    font-size: 4rem;
    line-height: 1.4;
  }
`;

const BoldText = styled.span`
  color: var(--color-primary);
  font-weight: 700;
`;

function Heading({ boldText, padding, children }) {
  return (
    <StyledHeading padding={padding}>
      {children} <BoldText>{boldText}</BoldText>
    </StyledHeading>
  );
}

export default Heading;
