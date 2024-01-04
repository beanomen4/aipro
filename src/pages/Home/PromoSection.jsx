import styled, { css } from "styled-components";
import Button from "../../ui/Button";
import Header from "./Header";

const StyledPromoSection = styled.section`
  height: 100vh;
  position: relative;
  background: no-repeat 0% 50%/100% url("/promo-bg.jpg");
  border-bottom: 1px solid #fff;

  padding: 0 10%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  color: #fff;
`;

const Box = styled.div`
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

  width: 90%;
  padding: 25% 3% 0 3%;
  color: var(--color-grey-200);
  text-align: left;
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
`;

const Span = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 100;
`;

function PromoSection() {
  return (
    <StyledPromoSection>
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
        <Button size="large">Get started</Button>
      </Box>
      <Box position="right">
        <img src="/promo-img.png" alt="Promo icon" />
      </Box>
    </StyledPromoSection>
  );
}

export default PromoSection;
