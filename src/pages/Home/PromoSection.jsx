import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import Header from "./Header";
import Button from "../../ui/Button";

const StyledPromoSection = styled.section`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10%;
  background: no-repeat 0% 50%/100% url("/promo-bg.jpg");
  color: #fff;
`;

const Box = styled.div`
  width: 90%;
  padding: 25% 3% 0 3%;
  color: var(--color-grey-200);
  text-align: left;

  ${(props) =>
    props.position === "left" &&
    css`
      text-align: left;
    `}

  ${(props) =>
    props.position === "right" &&
    css`
      justify-self: right;
    `}
`;

const H1 = styled.h1`
  font-size: 12rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
`;

const P = styled.p`
  margin-bottom: 6rem;
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 1.3;
`;

const Span = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 100;
`;

function PromoSection() {
  const navigate = useNavigate();

  return (
    <StyledPromoSection id="promoSection">
      <Header />
      <Box position="left">
        <H1>AIPRO</H1>
        <P>
          Revolution in task automation: Our programs for efficient operations
        </P>
        <Span>
          Discover unique solutions that make your life and business simpler and
          more efficient.
        </Span>
        <Button size="large" onClick={() => navigate("/signup")}>
          Get started
        </Button>
      </Box>
      <Box position="right">
        <img src="/promo-img.png" alt="Promo icon" />
      </Box>
    </StyledPromoSection>
  );
}

export default PromoSection;
