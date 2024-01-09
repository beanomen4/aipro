import styled from "styled-components";

import Button from "../ui/Button";
import { useMoveBack } from "../hooks/useMoveBack";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background: no-repeat 0% 50%/100% url("/questions-bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4.8rem;
  overflow: hidden;
`;

const Box = styled.div`
  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-100);

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    margin-bottom: 3.2rem;
    color: var(--color-grey-50);
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <h1>Looking for something? 🔍</h1>
        <p>We could not find the page that you are looking for!</p>
        <Button size="large" variation="dark" onClick={moveBack}>
          &larr; Head back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
