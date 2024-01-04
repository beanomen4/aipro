import styled from "styled-components";

const Span = styled.span`
  position: relative;
  text-decoration: none;

  &:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 1.5px;
    background-color: var(--btn-primary-color);
  }

  &:hover:before {
    width: 100%;
  }

  &::before {
    transition: width 0.35s;
  }
`;

function HoveredLink({ children }) {
  return <Span>{children}</Span>;
}

export default HoveredLink;
