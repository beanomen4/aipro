import React, { useState } from "react";
import "./Profile.scss";
import { Button, ConfigProvider, message, theme } from "antd";
import iconPencil from "./../../assets/pencil.svg";
import { CopyOutlined, InfoCircleOutlined } from "@ant-design/icons";
import ButtonForIcon from "../../ui/ButtonForIcon";
import { useUser } from "../../features/authentication/useUser";
function Profile() {
  const [activeButton, setActiveButton] = useState("personalBtn");
  const [messageShow, messageContext] = message.useMessage();
  const { user } = useUser();
  const { picture, name, email } = user.user_metadata;
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      {messageContext}
      <div className="wrapper">
        <div className="profile">
          <div className="profile__head">
            <div className="user-info">
              <div className="user-photo">
                <img width={170} src={picture} />
                <div className="send-photo">
                  <input
                    type="file"
                    name="myImage"
                    id="sendPhoto"
                    onChange={(event) => {}}
                  />
                  <label htmlFor="sendPhoto">
                    <img src={iconPencil} />
                  </label>
                </div>
              </div>
              <div className="user-info__name">{name || "Masha Petrenko"}</div>
              <div className="user-info__balance">
                Вalance: {"0"} AiCoin
                <ButtonForIcon
                  icon={<InfoCircleOutlined style={{ color: "#24A1E0" }} />}
                />
              </div>
            </div>
          </div>
            {activeButton === "personalBtn" && (
              <div className="personal">
                <div className="personal__head-name">Personal Area</div>
                <div className="personal__info">
                  <div className="personal__main-info">
                  <div className="personal__user-info">
                    <div className="title">Рersonal information</div>
                    <div id="name" className="personal__text">
                      Name: {name || "Mari_Petrovna"}
                    </div>
                    <div id="email" className="personal__text">
                      Email: {email || "MariPetrovna@gmail.com"}
                    </div>
                    <ButtonForIcon
                      icon={
                        <InfoCircleOutlined
                          style={{
                            color: "#24A1E0",
                            position: "absolute",
                            top: "15px",
                            right: "15px",
                          }}
                        />
                      }
                    />
                  </div>
                  <div className="ref-link">
                    Referral link:
                    <div className="link">{"http://fgfyjbkjguyfif66//hxb"}</div>
                    <div className="ref-link-item">
                      <CopyOutlined
                        style={{
                          fontSize: '15px'
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            user || "http://fgfyjbkjguyfif66//hxb"
                          );
                          infoMessage("Copy link!");
                        }}
                      />
                      <ButtonForIcon
                        icon={
                          <InfoCircleOutlined style={{ color: "#24A1E0", fontSize: '15px' }} />
                        }
                      />
                    </div>
                  </div>
                  <Button type="primary" style={{ textAlign: "left", height: '60px', borderRadius: '20px', fontSize: '20px'}} block>
                    My applications
                  </Button>
                  </div>
                  <div className="personal__pay">
                    <div className="title">
                      Payments
                      <div className="personal__balance">Balance: {"0"} AIC</div>
                    </div>

                    <ul className="personal__history">
                      <li>
                        Income: + 431,46 AIC{" "}
                        <div className="history-date">02 / 12 / 24</div>
                      </li>
                      <li>
                        Withdrawal: — 300 AIC{" "}
                        <div className="history-date">07 / 12 / 24</div>
                      </li>
                      <li>
                        Income: + 760,83 AIC{" "}
                        <div className="history-date">15 / 12 / 24</div>
                      </li>
                      <Button type="primary" block>
                      Pay out
                    </Button>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {activeButton === "referralBtn" && (
              <div className="referral">
                <div className="referral__head-name">Personal Area</div>
                <div className="referral__info">
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
                </div>
                <div className="referral__table"></div>
              </div>
            )}
        </div>
      </div>
    </ConfigProvider>
  );

  function changeButtonActive(id) {
    setActiveButton(id);
  }
  function infoMessage(message) {
    messageShow.info(message);
  }
}

export default Profile;
