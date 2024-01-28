import { Button, Form, Input } from "antd";
import "../../pages/Auth/Auth.scss";

function SignupForm({ children }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="signup"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {children}

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
        <Input type="password" placeholder="Password" className="auth__input" />
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
  );
}

export default SignupForm;
