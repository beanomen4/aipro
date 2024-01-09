import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import Header from "./Header";
import Button from "../../ui/Button";

const StyledPromoSection = styled.section`
  min-height: 100vh;
  padding-bottom: 15rem;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 10%;
  background: no-repeat 0% 50%/100% url("/promo-bg.jpg");
  color: #fff;

  @media (max-width: 1024px) {
    min-height: 50vh;
  }

  @media (max-width: 780px) {
    padding: 0 5%;
  }

  @media (max-width: 560px) {
    background: #1c1c1c;
  }
`;

const SectionContent = styled.div`
  width: 90%;
  margin-top: 15rem;
  color: var(--color-grey-200);
  text-align: left;

  ${(props) =>
    props.position === "left" &&
    css`
      text-align: left;

      @media (max-width: 560px) {
        grid-column: 1/-1;
        justify-self: center;
      }
    `}

  ${(props) =>
    props.position === "right" &&
    css`
      justify-self: right;
      margin-top: 7rem;

      @media (max-width: 560px) {
        grid-column: 1/-1;
        justify-self: center;
        align-self: start;
      }
    `}

  @media (min-width: 1360px) {
    margin-top: 25rem;
  }

  @media (max-width: 1024px) {
    margin-top: 25rem;
  }

  @media (max-width: 920px) {
    margin-top: 20rem;
  }

  @media (max-width: 780px) {
    width: 95%;
  }

  @media (max-width: 560px) {
    width: 65%;
    margin-top: 15rem;
    text-align: center;

    img {
      width: 60%;
      margin-top: -7.5rem;
      margin-bottom: 5rem;
    }
  }
`;

const H1 = styled.h1`
  font-size: 12rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media (max-width: 780px) {
    font-size: 10rem;
  }

  @media (max-width: 560px) {
    padding-bottom: 2rem;
    font-size: 8rem;
  }
`;

const P = styled.p`
  margin-bottom: 6rem;
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 1.3;

  @media (max-width: 780px) {
    font-size: 2.2rem;
  }

  @media (max-width: 560px) {
    font-size: 2rem;
  }
`;

const Span = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  font-weight: 100;

  @media (max-width: 560px) {
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: 300;
  }
`;

function PromoSection() {
  const navigate = useNavigate();

  return (
    <StyledPromoSection id="promoSection">
      <Header top="1rem" />

      <SectionContent position="left">
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
      </SectionContent>
      <SectionContent position="right">
        <img src="/promo-img.png" alt="Promo icon" />
      </SectionContent>
    </StyledPromoSection>
  );
}

export default PromoSection;
