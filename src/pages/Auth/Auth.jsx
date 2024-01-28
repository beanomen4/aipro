import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import "./Auth.scss";
import LoginForm from "../../features/authentication/LoginForm";
import SignupForm from "../../features/authentication/SignupForm";

function Auth() {
  const navigate = useNavigate();

  // when isActive === true -> signup form active
  const [isActive, setIsActive] = useState(
    window.location.pathname === "/signup"
  );

  const handleLoginClick = () => {
    setIsActive(false);
    navigate("/login", { replace: true });
  };
  const handleRegisterClick = () => {
    setIsActive(true);
    navigate("/signup", { replace: true });
  };

  return (
    <div className="auth">
      <div className={`auth__container ${isActive ? "auth__active" : ""}`}>
        <div className="auth__form-container auth__sign-up">
          <SignupForm>
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
          </SignupForm>
        </div>

        <div className="auth__form-container auth__sign-in">
          <LoginForm>
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
          </LoginForm>
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
