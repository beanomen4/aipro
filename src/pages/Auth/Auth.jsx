import { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";

import "./Auth.scss";

function Auth() {
  const [isActive, setIsActive] = useState(false);

  const handleLoginClick = () => setIsActive(false);
  const handleRegisterClick = () => setIsActive(true);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="auth">
      <div className={`auth__container ${isActive ? "auth__active" : ""}`}>
        <div className="auth__form-container auth__sign-up">
          <Form
            name="signup"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Create Account</h1>

            <div className="auth__social-icons">
              <a href="#" className="auth__icon">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className="auth__icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>

            <span>or use your email for registration</span>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
              style={{ width: "100%", margin: 0 }}
            >
              <Input type="text" placeholder="Name" className="auth__input" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              style={{ width: "100%", margin: 0 }}
            >
              <Input type="email" placeholder="Email" className="auth__input" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              style={{ width: "100%", marginBottom: "10px" }}
            >
              <Input
                type="password"
                placeholder="Password"
                className="auth__input"
              />
            </Form.Item>

            <Form.Item
              style={{ width: "100%", display: "grid", placeItems: "center" }}
            >
              <Button
                type="primary"
                shape="round"
                size="large"
                className="auth__button"
                htmlType="submit"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="auth__form-container auth__sign-in">
          <Form
            name="login"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1>Sign In</h1>

            <div className="auth__social-icons">
              <a href="#" className="auth__icon">
                <i className="fa-brands fa-google"></i>
              </a>
              <a href="#" className="auth__icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>

            <span>or use your email password</span>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
              style={{ width: "100%", margin: 0 }}
            >
              <Input type="email" placeholder="Email" className="auth__input" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              style={{ width: "100%", margin: 0 }}
            >
              <Input
                type="password"
                placeholder="Password"
                className="auth__input"
              />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              style={{
                width: "100%",
                marginBottom: "5px",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              style={{
                width: "100%",
                display: "grid",
                placeItems: "center",
                marginBottom: 0,
              }}
            >
              <Button
                type="primary"
                shape="round"
                size="large"
                className="auth__button"
                htmlType="submit"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="auth__toggle-container">
          <div className="auth__toggle">
            <div className="auth__toggle-panel auth__toggle-left">
              <h1>Welcome, Friend!</h1>
              <p>Enter your personal details to use all of site features</p>
              <Button
                ghost
                type="default"
                shape="round"
                className={`auth__button--toggle auth__hidden ${
                  isActive ? "" : "auth__active"
                }`}
                onClick={handleLoginClick}
              >
                Sign In
              </Button>
            </div>

            <div className="auth__toggle-panel auth__toggle-right">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <Button
                ghost
                type="default"
                shape="round"
                className={`auth__button--toggle auth__hidden ${
                  isActive ? "auth__active" : ""
                }`}
                onClick={handleRegisterClick}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
