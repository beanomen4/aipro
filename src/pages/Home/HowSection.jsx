import styled from "styled-components";

import Heading from "./Heading";
import productIcon from "/src/assets/instruction/product.svg";
import signintIcon from "/src/assets/instruction/signin.svg";
import customizeIcon from "/src/assets/instruction/configure.svg";
import usingIcon from "/src/assets/instruction/using.svg";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

const StyledHowSection = styled.section`
  height: 60vh;
  background-color: #1c1c1c;
  border-bottom: 1px solid #fff;

  color: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    width: 20rem;
    margin-top: 2rem;
  }
`;

const Boxes = styled.div`
  width: 78%;
  height: 20rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
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
`;

const BoxStep = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--color-grey-100);
  font-size: 4rem;
  font-weight: 600;
  line-height: 1;
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
`;

const BoxHeading = styled.span`
  margin-bottom: 2rem;
  color: var(--color-grey-200);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
`;

const BoxDescription = styled.span`
  display: inline-block;
  padding: 0 0.75rem;
  color: var(--color-grey-200);
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: center;
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
