import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-grey-0: #fff;
    --color-grey-50: #111827;
    --color-grey-100: #e0e7ff;
    --color-grey-200: #e5e7eb;
    --color-grey-500: #6b7280;
    --color-grey-600: #d1d5db;
    --color-grey-700: #374151;

    --color-brand-50: #eef2ff;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;

    --border-radius-sm: 5px;
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);

    // figma
    --btn-primary-color: #24A1DF;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, border 0.3s;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);
    font-size: 1.6rem;
    line-height: 1.5;
    transition: color 0.3s, background-color 0.3s;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  button:has(svg) {
    line-height: 0;
  }

  *:disabled {
    cursor: not-allowed;
  }

  input:disabled,
  select:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  select:focus,
  button:focus,
  textarea:focus {
    outline-offset: -1px;
    outline: 2px solid var(--color-brand-600);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    hyphens: auto;
    overflow-wrap: break-word;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyles;
