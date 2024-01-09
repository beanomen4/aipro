import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "login" &&
    css`
      padding: 1rem 6rem;
      background-color: var(--color-grey-0);
    `}

  border-radius: var(--border-radius-md);
  font-size: 1.4rem;
  overflow: hidden;
`;

Form.defaultProps = { type: "login" };

export default Form;
