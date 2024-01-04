import styled from "styled-components";

import Button from "../../ui/Button";
import HoveredLink from "../../ui/HoveredLink";

function Header() {
  const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    height: 7rem;

    display: grid;
    grid-template-columns: 20rem 1fr;
    /* column-gap: 40rem; */
  `;

  const Img = styled.img`
    height: 5rem;
    justify-self: center;
    align-self: center;
  `;

  const Nav = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5rem;
  `;

  return (
    <StyledHeader>
      <Img src="/logo-nav.png" alt="Logo AiPro" />
      <Nav>
        <li>
          <HoveredLink>How it works</HoveredLink>
        </li>
        <li>
          <HoveredLink>Benefits</HoveredLink>
        </li>
        <li>
          <HoveredLink>Who is it for</HoveredLink>
        </li>
        <li>
          <HoveredLink>FAQ</HoveredLink>
        </li>
        <li>
          <Button size="large" variation="hovered">
            Login
          </Button>
        </li>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
