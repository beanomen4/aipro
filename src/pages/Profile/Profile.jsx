import React, { useEffect, useState } from "react";
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
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 1140px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 1140px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);
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
          <div className="cards-wrap">
            <div
              className={
                activeButton === "personalBtn" ? "card active" : "card"
              }
              id="personal"
            >
              <div
                className="card__head-name"
                id="personalBtn"
                onClick={(e) => setActiveButton(e.target.id)}
              >
                Personal Area
              </div>
              <div className="card__info">
                <div className="card__main-info">
                  <div className="card__user-info">
                    <div className="title">Рersonal information</div>
                    <div id="name" className="card__text">
                      Name: {name || "Mari_Petrovna"}
                    </div>
                    <div id="email" className="card__text">
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
                          fontSize: "15px",
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
                          <InfoCircleOutlined
                            style={{ color: "#24A1E0", fontSize: "15px" }}
                          />
                        }
                      />
                    </div>
                  </div>
                  <Button
                    type="primary"
                    className="btn-check"
                    block
                  >
                    My applications
                  </Button>
                </div>
                <div className="card__pay">
                  <div className="title">
                    Payments
                    <div className="card__balance">Balance: {"0"} AIC</div>
                  </div>

                  <ul className="card__history">
                    <li>
                      Income: + 431,46 AIC
                      <div className="history-date">02 / 12 / 24</div>
                    </li>
                    <li>
                      Withdrawal: — 300 AIC
                      <div className="history-date">07 / 12 / 24</div>
                    </li>
                    <li>
                      Income: + 760,83 AIC
                      <div className="history-date">15 / 12 / 24</div>
                    </li>
                    <Button type="primary" block>
                      Pay out
                    </Button>
                  </ul>
                </div>
                {matches && (
                   <Button
                   type="primary"
                   className="btn-check"
                   style={{display: "block"}}
                   block
                 >
                   My applications
                 </Button>
                ) }
              </div>
            </div>

            <div
              className={
                activeButton === "referralBtn" ? "card active" : "card"
              }
              id="referral"
            >
              <div
                className="card__head-name"
                id="referralBtn"
                onClick={(e) => setActiveButton(e.target.id)}
              >
                Referral system
              </div>
              <div className="card__info">
                <div className="card__main-info">
                  <div className="card__total-earnings">
                    Total earnings: <span>{"100"} AiCoin</span>
                    <ButtonForIcon
                      icon={
                        <InfoCircleOutlined
                          style={{ color: "#24A1E0", fontSize: "15px" }}
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
                          fontSize: "15px",
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
                          <InfoCircleOutlined
                            style={{ color: "#24A1E0", fontSize: "15px" }}
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
                      <div className="card__table-wrap">
                      <table className="card__table">
                  <thead>
                    <tr>
                      <th scope="col">Referral ID</th>
                      <th scope="col">Amount of earnings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                      </div>
              </div>
            </div>
          </div>
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
