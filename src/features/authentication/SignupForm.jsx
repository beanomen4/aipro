import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Form from "../../ui/Form";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRowVertical from "../../ui/FormRowVertical";

const FormContainer = styled.div`
  width: 40rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* gap: 1rem; */

  & form {
    width: 100%;
  }
`;

const Heading = styled.h1`
  font-size: 3.2rem;
  font-weight: 500;
  color: #1c1c1c;
`;

const Divider = styled.div`
  width: 27.5rem;
  height: 1px;
  margin-bottom: 1.5rem;
  background-color: var(--color-grey-300);
`;

const P = styled.p`
  padding: 0 6.5rem;
  align-self: flex-start;
  color: #1c1c1c;
  font-size: 1.4rem;
`;

const Span = styled.span`
  margin-left: 0.5rem;
  color: var(--color-primary);
  font-size: 1.4rem;
  /* font-weight: 500; */
  cursor: pointer;
`;

function SignupForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("kastastin");
  const [email, setEmail] = useState("bob@example.com");
  const [password, setPassword] = useState("pass1111");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    alert("sign up");
  }

  return (
    <FormContainer>
      <Heading>Sign up</Heading>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Name">
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormRowVertical>

        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormRowVertical>

        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRowVertical>

        <FormRowVertical label="Confirm password">
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormRowVertical>

        <FormRowVertical>
          <Button variation="dark" size="large">
            Sign up
          </Button>
        </FormRowVertical>
      </Form>

      <Divider />
      <P>
        Already have an account?{" "}
        <Span onClick={() => navigate("/login")}>Log in</Span>
      </P>
    </FormContainer>
  );
}

export default SignupForm;
