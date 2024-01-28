import { Link } from "react-router-dom";
import { Avatar, ConfigProvider, Select, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";

import "./Navigation.scss";

function Navigation() {
  return (
    <nav className="nav">
      <Link className="logo">
        {/*
          Vercel doesn't display logo
          'src/assets/logo-icon.svg' - doesn't work
          '/src/assets/logo-icon.svg' - doesn't work
         */}
        AiPro <img src="src/assets/logo-icon.svg" alt="Logo AiPro" />
      </Link>
      <div className="user">
        <ConfigProvider
          theme={{
            algorithm: theme.darkAlgorithm,
          }}
        >
          <Select
            defaultValue="Ua"
            className="change-lang"
            options={[
              {
                value: "Ua",
                label: "Ua",
              },
              {
                value: "En",
                label: "En",
              },
            ]}
          />
        </ConfigProvider>
        <Avatar
          size="large"
          src={"https://i.mydramalist.com/66L5p_5c.jpg" || <UserOutlined />}
        />
      </div>
    </nav>
  );
}

export default Navigation;
