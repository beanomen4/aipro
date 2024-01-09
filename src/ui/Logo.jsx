import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

function Logo({ type }) {
  const src =
    type === "vertical" ? "/logo-vertical.png" : "/logo-horizontal.png";

  return (
    <StyledLogo>
      <img src={src} alt="Logo AiPro icon" />
    </StyledLogo>
  );
}

export default Logo;
