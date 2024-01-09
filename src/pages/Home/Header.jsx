import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import styled from "styled-components";

import Button from "../../ui/Button";
import HoveredLink from "../../ui/HoveredLink";
import Logo from "../../ui/Logo";

const StyledHeader = styled.header`
  width: ${(props) => `${props.width || "90%"}`};
  height: 7rem;
  position: absolute;
  top: ${(props) => `${props.top || "0"}`};
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: 20rem 1fr;

  @media (max-width: 920px) {
    width: 80%;
    top: 2rem;
  }

  @media (max-width: 560px) {
    height: 5rem;
  }
`;

const ImageContainer = styled.div`
  height: 5rem;
  justify-self: center;
  cursor: pointer;

  @media (max-width: 560px) {
    width: 17rem;
  }
`;

const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5rem;

  @media (max-width: 920px) {
    li:not(:last-child) {
      display: none;
    }
  }
`;

function Header({ width, top }) {
  const navigate = useNavigate();

  return (
    <StyledHeader width={width} top={top}>
      <ImageContainer>
        <Link to="promoSection" smooth={true} offset={-50} duration={700}>
          <Logo />
        </Link>
      </ImageContainer>
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
