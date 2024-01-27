import React from "react";
import "./Navigation.scss";
import { Avatar, Select } from "antd";
import { UserOutlined } from "@ant-design/icons";
function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">
        AiPro <img src="src/assets/logo-icon.svg" alt="" />
      </div>
      <div className="user">
        <Select
          defaultValue="Ua"
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
        <Avatar
          size="large"
          src={"https://i.mydramalist.com/66L5p_5c.jpg" || <UserOutlined />}
        />
      </div>
    </nav>
  );
}

export default Navigation;
