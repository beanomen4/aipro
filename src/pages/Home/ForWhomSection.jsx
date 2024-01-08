import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Heading from "./Heading";
import Button from "../../ui/Button";

import sectionImg from "/src/assets/services/forWhom-img.png";
import businessIcon from "/src/assets/services/business.svg";
import educationIcon from "/src/assets/services/education.svg";
import supportIcon from "/src/assets/services/support.svg";
import contentIcon from "/src/assets/services/content.svg";
import freelancersIcon from "/src/assets/services/freelancers.svg";
import specializedIcon from "/src/assets/services/specialized.svg";

const StyledForWhomSection = styled.section`
  min-height: 100vh;
  padding-bottom: 15rem;
  background: no-repeat 0% 50%/100% url("/forWhom-bg.jpg");

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    min-height: 45vh;
  }

  @media (max-width: 780px) {
    min-height: 60vh;
  }

  @media (max-width: 560px) {
    min-height: auto;
    padding-bottom: 5rem;
  }
`;

const StyledSectionContent = styled.div`
  width: 78%;
  height: 45rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);

  @media (max-width: 780px) {
    width: 90%;
  }

  @media (max-width: 560px) {
    width: 60%;
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    row-gap: 5rem;
  }
`;

const SectionImage = styled.div`
  grid-column: 2/3;
  grid-row: 1/-1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  button {
    width: 80%;
    transform: translateX(2rem);
  }

  @media (max-width: 560px) {
    display: none;
  }
`;

const StyledItem = styled.div`
  grid-column: ${(props) => `${props.gcol || "1/1"}`};
  grid-row: ${(props) => `${props.grow || "1/1"}`};

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 560px) {
    /* grid-column: 1/span 2; */
    /* grid-row: auto/auto; */
    grid-column: auto;
    grid-row: auto;
  }
`;

const ItemImg = styled.div`
  flex-shrink: 0;
  width: 8rem;
  height: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.21);
  background: #1e313b;

  img {
    width: 4rem;
  }

  @media (max-width: 920px) {
    width: 6rem;
    height: 6rem;
  }

  img {
    width: 3rem;
  }
`;

const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemHeading = styled.div`
  padding: 1rem;
  color: var(--color-grey-200);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1;
`;

const ItemList = styled.ul`
  padding-left: 1rem;
  list-style-type: disc;
`;

const ItemLi = styled.li`
  color: var(--color-grey-200);
  font-size: 1.4rem;
  font-weight: 300;
  line-height: 1.6;
  text-align: left;
`;

function ForWhomSection() {
  const navigate = useNavigate();

  return (
    <StyledForWhomSection id="forWhomSection">
      <Heading boldText="service suitable for">Who is the</Heading>

      <StyledSectionContent>
        <SectionImage>
          <img src={sectionImg} alt="Section image" />
          <Button size="large" onClick={() => navigate("/signup")}>
            Begin using
          </Button>
        </SectionImage>

        <StyledItem>
          <ItemImg>
            <img src={businessIcon} alt="Business icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Business and Marketing</ItemHeading>
            <ItemList>
              <ItemLi>Business Owners</ItemLi>
              <ItemLi>Managers</ItemLi>
              <ItemLi>Marketers</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gcol="3/-1">
          <ItemImg>
            <img src={educationIcon} alt="Education icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Education and Training</ItemHeading>
            <ItemList>
              <ItemLi>Teachers and Educational Institutions</ItemLi>
              <ItemLi>Training Professionals</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem grow="3/4">
          <ItemImg>
            <img src={supportIcon} alt="Support icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>IT and Technical Support</ItemHeading>
            <ItemList>
              <ItemLi>Traffic Arbitrage</ItemLi>
              <ItemLi>Developers and Technical Experts</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gcol="3/-1" grow="3/4">
          <ItemImg>
            <img src={contentIcon} alt="Content icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Content Management</ItemHeading>
            <ItemList>
              <ItemLi>Blog Owners and Content Managers</ItemLi>
              <ItemLi>Creative Personalities</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem grow="5/-1">
          <ItemImg>
            <img src={freelancersIcon} alt="Freelancers icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Freelancers</ItemHeading>
            <ItemList>
              <ItemLi>Self-Employed Individuals</ItemLi>
              <ItemLi>Individual Entrepreneurial Activity</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
        <StyledItem gcol="3/4" grow="5/-1">
          <ItemImg>
            <img src={specializedIcon} alt="Specialized icon" />
          </ItemImg>
          <ItemContent>
            <ItemHeading>Specialized Niches</ItemHeading>
            <ItemList>
              <ItemLi>HR, Financial Analysts</ItemLi>
              <ItemLi>Media Agencies, Event Organizers</ItemLi>
            </ItemList>
          </ItemContent>
        </StyledItem>
      </StyledSectionContent>
    </StyledForWhomSection>
  );
}

export default ForWhomSection;
