import { Link } from "react-router-dom";
import { Avatar, ConfigProvider, Dropdown, Select, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import logo from "./../../assets/logo-icon.svg";
import "./Navigation.scss";

function Navigation() {
  const items = [
    {
      label: <Link to={'/'}>AiPro</Link>,
      key: '0',
    },
    {
      label: <Link to={'/'}>My account</Link>,
      key: '1',
    },
    {
      label: <Link to={'/'}>Applications</Link>,
      key: '2',
      children: [
        {
          key: '2-1',
          label: 'All applications',
        },
        {
          key: '2-2',
          label: 'My applications',
        },
      ],
    },
    {
      label: <Link to={'/'}>Exit</Link>,
      key: '3',
    },
  ];

  return (
    <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    <nav className="nav">
      <Link className="logo">
        AiPro <img src={logo} alt="Logo AiPro" />
      </Link>
      <div className="user">
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
            <Dropdown
            overlayClassName="dropdown-menu"
              menu={{
                items,
              }}
              placement="bottomRight"
              trigger={["click"]}
            >
               <Avatar
          className="avatar"
          size="large"
          src={"https://i.mydramalist.com/66L5p_5c.jpg" || <UserOutlined />}
        />
            </Dropdown>
      </div>
    </nav>
    </ConfigProvider>
  );
}

export default Navigation;
