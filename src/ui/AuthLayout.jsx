import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Logo from "../ui/Logo";

const ImageContainer = styled.div`
  width: 15rem;
  position: absolute;
  top: 2rem;
  cursor: pointer;

  div img {
    z-index: 1;
  }

  @media (max-width: 560px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

const PageLayout = styled.main`
  min-height: 100vh;
  background: no-repeat 20% 50%/110% url("/login-bg.jpg");

  display: flex;
  justify-content: flex-end;

  @media (max-width: 560px) {
    justify-content: center;
    background: #fff;
  }
`;

function AuthLayout({ children }) {
  const navigate = useNavigate();

  return (
    <>
      <ImageContainer onClick={() => navigate("/")}>
        <Logo type="vertical" />
      </ImageContainer>
      <PageLayout>{children}</PageLayout>
    </>
  );
}

export default AuthLayout;
