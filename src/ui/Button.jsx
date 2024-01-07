import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 3.6rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-primary);

    &:hover {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid var(--color-primary);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  hovered: css`
    color: var(--color-brand-50);
    background-color: rgba(0, 0, 0, 0);

    &:hover {
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }
  `,
  mainCard: css`
    width: 50%;
    display: block;
    margin: 0 auto;
    padding: 1rem 1.6rem !important;
    border: 1px solid var(--color-secondary);
    border-radius: 4px;
    background-color: var(--color-secondary);
    color: #fff;
    font-size: 1.6rem !important;
    font-weight: 500;
    line-height: 1;

    &:hover {
      background-color: rgba(0, 0, 0, 0);
      border: 1px solid var(--color-secondary);
    }
  `,
  secondaryCard: css`
    margin-top: 1rem;
    padding: 0.5rem 1.5rem !important;
    background-color: rgba(0, 0, 0, 0);
    color: var(--color-brand-50);
    font-size: 1.2rem !important;
    line-height: 1;
    text-transform: capitalize !important;
    font-weight: 300 !important;

    &:hover {
      background-color: var(--color-primary);
      border: 1px solid var(--color-primary);
    }
  `,
};

const Button = styled.button`
  border: 1px solid var(--color-primary);
  border-radius: 100px;
  box-shadow: var(--shadow-sm);

  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
