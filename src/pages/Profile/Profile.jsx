import React, { useState } from "react";
import "./Profile.scss";
import { Button, ConfigProvider, Image, message, theme } from "antd";
import { CopyOutlined, InfoCircleOutlined } from "@ant-design/icons";
import ButtonForIcon from "../../ui/ButtonForIcon";
function Profile({ name, balance, user }) {
  const [activeButton, setActiveButton] = useState("personalBtn");
  const [messageShow, messageContext] = message.useMessage();

  return (
    <div className="wrapper">
      <div className="profile">
        <div className="profile__head">
          <div className="user-info">
            <Image
              width={170}
              style={{ borderRadius: "100%" }}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <div className="user-info__name">{name || "Masha Petrenko"}</div>
            <div className="user-info__balance">
              Вalance: {balance || "1,000"} AiCoin
              <ButtonForIcon
                icon={<InfoCircleOutlined style={{ color: "#24A1E0" }} />}
              />
            </div>
          </div>
        </div>
        <div className="profile__info">
          <button
            onClick={(e) => changeButtonActive(e.target.id)}
            id="personalBtn"
            style={{ left: "0" }}
            className={`btn ${
              activeButton === "personalBtn" ? "btn_active" : ""
            }`}
          >
            Personal Area
          </button>
          <button
            onClick={(e) => changeButtonActive(e.target.id)}
            style={{ right: "0" }}
            id="referralBtn"
            className={`btn ${
              activeButton === "referralBtn" ? "btn_active" : ""
            }`}
          >
            Referral system
          </button>
          <div className="personal">
            <div className="personal__info">
              <div className="personal__user-info">
                <div className="title">Рersonal information</div>
                <div id="name" className="personal__text">
                  Name: {user || "Mari_Petrovna"}
                </div>
                <div id="email" className="personal__text">
                  Email: {user || "MariPetrovna@gmail.com"}
                </div>
                <ButtonForIcon
                  icon={<InfoCircleOutlined style={{ color: "#24A1E0" }} />}
                />
              </div>
              <div className="ref-link">
                Referral link: {user || "http://fgfyjbkjguyfif66//hxb"}
                <ButtonForIcon
                  icon={<InfoCircleOutlined style={{ color: "#24A1E0" }} />}
                />
                <ConfigProvider
                  theme={{
                    algorithm: theme.darkAlgorithm,
                  }}
                >
                  {messageContext}
                </ConfigProvider>
                <CopyOutlined
                  onClick={() => {
                    navigator.clipboard.writeText(
                      user || "http://fgfyjbkjguyfif66//hxb"
                    );
                    infoMessage("Copy link!");
                  }}
                />
              </div>
              <Button type="primary" style={{textAlign: 'left'}} block>
              All applications
              </Button>
            </div>
            <div className="personal__pay">
              <div className="title">Payments</div>
              <div className="personal__balance">Balance: {balance || '1,000'} AIC</div>

                <ul className="personal__history">
                    <li>Income: + 431,46 AIC <div className="history-date">02 / 12 / 24</div></li>
                    <li>Withdrawal: — 300 AIC <div className="history-date">07 / 12 / 24</div></li>
                    <li>Income: + 760,83 AIC <div className="history-date">15 / 12 / 24</div></li>
                </ul>
                <Button type="primary" block>
                    Pay out
              </Button>
            </div>
          </div>
          <div className="referral">
            <div className="referral__info"></div>
            <div className="referral__table"></div>
          </div>
        </div>
      </div>
    </div>
  );

  function changeButtonActive(id) {
    setActiveButton(id);
  }
  function infoMessage(message) {
    messageShow.info(message);
  }
}

export default Profile;
