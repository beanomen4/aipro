import { Button, Checkbox, Form, Input } from "antd";
import "../../pages/Auth/Auth.scss";

function LoginForm({ children }) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {children}
      
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
        <Input type="password" placeholder="Password" className="auth__input" />
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
  );
}

export default LoginForm;
