import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Heading from "./Heading";
import Button from "../../ui/Button";

import productIcon from "/src/assets/instruction/product.svg";
import signintIcon from "/src/assets/instruction/signin.svg";
import customizeIcon from "/src/assets/instruction/configure.svg";
import usingIcon from "/src/assets/instruction/using.svg";

const StyledHowSection = styled.section`
  height: 80vh;
  background-color: #1c1c1c;

  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    width: 20rem;
    margin-top: 4rem;
  }

  @media (max-width: 1024px) {
    height: 35vh;
  }

  @media (max-width: 780px) {
    min-height: 40vh;
  }

  @media (max-width: 560px) {
    height: auto;
    padding-bottom: 5rem;
  }
`;

const Boxes = styled.div`
  width: 78%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 780px) {
    width: 90%;
  }

  @media (max-width: 560px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const Box = styled.div`
  width: 22rem;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: var(--color-instruction-bg);

  @media (max-width: 920px) {
    width: 18rem;
    height: 20rem;
  }

  @media (max-width: 560px) {
    width: 25rem;
    height: 20rem;
  }
`;

const BoxStep = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--color-grey-100);
  font-size: 4rem;
  font-weight: 600;
  line-height: 1;

  @media (max-width: 920px) {
    font-size: 2.8rem;
  }

  @media (max-width: 560px) {
    font-size: 3.2rem;
  }
`;

const ImgContainer = styled.div`
  width: 7rem;
  height: 7rem;
  margin: 1.5rem 0;
  border-radius: inherit;
  background-color: #1c1c1c;

  display: grid;
  place-content: center;

  & img {
    width: 3.5rem;
  }

  @media (max-width: 920px) {
    width: 5rem;
    height: 5rem;

    & img {
      width: 2.5rem;
    }
  }
`;

const BoxHeading = styled.span`
  margin-bottom: 2rem;
  color: var(--color-grey-200);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;

  @media (max-width: 560px) {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }
`;

const BoxDescription = styled.span`
  display: inline-block;
  padding: 0 0.75rem;
  color: var(--color-grey-200);
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 560px) {
    padding: 0 1rem;
    font-weight: 400;
  }
`;

function HowSection() {
  const navigate = useNavigate();

  return (
    <StyledHowSection id="howSection">
      <Heading boldText="works">How it</Heading>
      <Boxes>
        <Box>
          <BoxStep>01</BoxStep>
          <ImgContainer>
            <img src={productIcon} alt="Product icon first step" />
          </ImgContainer>
          <BoxHeading>Choose a product</BoxHeading>
          <BoxDescription>
            Explore catalog and select program that suits you.
          </BoxDescription>
        </Box>
        <Box>
          <BoxStep>02</BoxStep>
          <ImgContainer>
            <img src={signintIcon} alt="Sign in icon second step" />
          </ImgContainer>
          <BoxHeading>Sign in</BoxHeading>
          <BoxDescription>
            Create account and unlock a multitude of new possibilities.
          </BoxDescription>
        </Box>
        <Box>
          <BoxStep>03</BoxStep>
          <ImgContainer>
            <img src={customizeIcon} alt="Customize icon third step" />
          </ImgContainer>
          <BoxHeading>Configure</BoxHeading>
          <BoxDescription>
            Customize the programs to fit your tasks.
          </BoxDescription>
        </Box>
        <Box>
          <BoxStep>04</BoxStep>
          <ImgContainer>
            <img src={usingIcon} alt="Using icon fourth step" />
          </ImgContainer>
          <BoxHeading>Start using</BoxHeading>
          <BoxDescription>
            Enjoy an automated and efficient workflow!
          </BoxDescription>
        </Box>
      </Boxes>
      <Button size="large" onClick={() => navigate("/signup")}>
        Begin using
      </Button>
    </StyledHowSection>
  );
}

export default HowSection;
