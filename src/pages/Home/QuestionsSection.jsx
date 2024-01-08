import { useState } from "react";
import styled, { keyframes } from "styled-components";

import Heading from "./Heading";
import plusIcon from "/src/assets/questions/plus.svg";
import minusIcon from "/src/assets/questions/minus.svg";
import sectionImg from "/src/assets/questions/section-img.png";

const StyledQuestionsSection = styled.section`
  position: relative;
  background-color: #1c1c1c;
  padding-bottom: 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionImg = styled.div`
  position: absolute;
  top: 5rem;
  right: -45rem;
  z-index: 1;
`;

const QuestionTabs = styled.div`
  width: 78%;
  z-index: 2;
`;

const QuestionTab = styled.div`
  display: flex;
  margin: 2rem;
  padding: 2rem;
  border-radius: 10px;
  background: #1e303a;
  cursor: pointer;

  &:hover {
    background: #2c4657;
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
`;

const AnimatedQuestionTab = styled(QuestionTab)`
  animation: ${(props) => (props.isOpen ? fadeInOut : "none")} 0.7s ease-in-out;
`;

const TabIcon = styled.div`
  flex-shrink: 0;
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  background: #24a1df;
  box-shadow: 0px 16px 25px 0px rgba(36, 161, 223, 0.19);

  img {
    width: 1.5rem;
  }
`;

const TabTextContent = styled.div`
  margin: 0.5rem 0 0 2rem;
`;

const TabHeading = styled.h4`
  color: #fff;
  font-size: 2.2rem;

  @media (max-width: 560px) {
    font-size: 2rem;
    font-weight: 400;
  }
`;

const TabDescription = styled.p`
  width: 100%;
  margin-top: 2rem;
  color: var(--color-grey-200);
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
`;

function QuestionsSection() {
  const [curOpen, setCurOpen] = useState(null);

  const faqs = [
    {
      title: "What is AiPro?",
      text: "AiPro is a company specializing in the development of software solutions for business process automation.",
    },
    {
      title: "What products does AiPro offer?",
      text: "We offer a wide range of products, including tools for mass messaging, technical support, bot creation, and many others, for automating various tasks.",
    },
    {
      title: "Who are your products suitable for?",
      text: "Absolutely for everyone looking to optimize their operations.",
    },
    {
      title: "What benefits will my business gain from using AiPro?",
      text: "Increased efficiency, boosted sales, reduced time on routine tasks, enhanced customer interaction, and many other advantages.",
    },
    {
      title: "How secure are your products?",
      text: "We ensure a high level of security using advanced encryption technologies and data protection measures.",
    },
    {
      title: "How is user support provided?",
      text: "Our customer support is available 24/7 through various communication channels, ready to answer your questions and resolve any issues that may arise.",
    },
    {
      title: "How can I contact the AiPro team for partnership inquiries?",
      text: "For partnership inquiries, please email us at ihub@gmail.com. We are always open to new partnership opportunities.",
    },
  ];

  return (
    <StyledQuestionsSection id="questionsSection">
      <Heading>Questions</Heading>
      <SectionImg>
        <img src={sectionImg} alt="Section image" />
      </SectionImg>

      <QuestionTabs>
        {faqs.map((el, i) => (
          <AccordionItem
            num={i}
            title={el.title}
            curOpen={curOpen}
            onOpen={setCurOpen}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </QuestionTabs>
    </StyledQuestionsSection>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <AnimatedQuestionTab onClick={handleToggle} isOpen={isOpen}>
      <TabIcon>
        <img src={isOpen ? minusIcon : plusIcon} alt="Tab icon" />
      </TabIcon>
      <TabTextContent>
        <TabHeading>{title}</TabHeading>
        {isOpen ? <TabDescription>{children}</TabDescription> : null}
      </TabTextContent>
    </AnimatedQuestionTab>
  );
}

export default QuestionsSection;
