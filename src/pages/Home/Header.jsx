import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";

import Button from "../../ui/Button";
import HoveredLink from "../../ui/HoveredLink";

const StyledHeader = styled.header`
  width: 90%;
  height: 7rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 20rem 1fr;
`;

const ImgContainer = styled.div`
  height: 5rem;
  justify-self: center;
  /* align-self: center; */
  cursor: pointer;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <ImgContainer>
        <Link to="promoSection" smooth={true} offset={-50} duration={700}>
          <img src="/logo-nav.png" alt="Logo AiPro" />
        </Link>
      </ImgContainer>
      <Nav>
        <li>
          <Link to="howSection" smooth={true} offset={-50} duration={700}>
            <HoveredLink>How it works</HoveredLink>
          </Link>
        </li>
        <li>
          <Link to="benefitsSection" smooth={true} offset={-50} duration={700}>
            <HoveredLink>Benefits</HoveredLink>
          </Link>
        </li>
        <li>
          <Link to="forWhomSection" smooth={true} offset={0} duration={700}>
            <HoveredLink>Who is it for</HoveredLink>
          </Link>
        </li>
        <li>
          <Link to="productsSection" smooth={true} offset={0} duration={700}>
            <HoveredLink>Products</HoveredLink>
          </Link>
        </li>
        <li>
          <Link to="questionsSection" smooth={true} offset={0} duration={700}>
            <HoveredLink>FAQ</HoveredLink>
          </Link>
        </li>
        <li>
          <Button
            size="large"
            variation="hovered"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </li>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
