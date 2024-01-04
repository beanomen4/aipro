import styled from "styled-components";

const StyledQuestionsSection = styled.section`
  height: 100vh;
  background-color: black;
  border-bottom: 1px solid #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #fff;
`;

function QuestionsSection() {
  return (
    <StyledQuestionsSection id="questionsSection">
      Questions
    </StyledQuestionsSection>
  );
}

export default QuestionsSection;
