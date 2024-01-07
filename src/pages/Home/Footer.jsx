import styled from "styled-components";

import Header from "./Header";

const StyledFooter = styled.footer`
  height: 14rem;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0);
  background-color: #1c1c1c;
  color: #fff;

  @media (max-width: 1024px) {
    height: 18.5rem;
  }

  @media (max-width: 920px) {
    height: 8rem;
    
    header {
      display: none;
    }
  }
`;

const Divider = styled.div`
  margin: 8rem 0 2rem 0;
  border-bottom: 1px solid #5d637b;

  @media (max-width: 920px) {
    margin: 2rem 0 2rem 0;
  }
`;

const Text = styled.p`
  color: var(--color-grey-200);
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Header width="75%" />
      <Divider />
      <Text>@ AiPro 2023</Text>
    </StyledFooter>
  );
}

export default Footer;
