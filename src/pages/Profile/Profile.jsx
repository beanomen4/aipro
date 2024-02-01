import { useState } from "react";
import { Button, ConfigProvider, Image, message, theme } from "antd";
import { CopyOutlined, InfoCircleOutlined } from "@ant-design/icons";

import { useUser } from "../../features/authentication/useUser";
import ButtonForIcon from "../../ui/ButtonForIcon";

import "./Profile.scss";

function Profile({ balance }) {
  const { user } = useUser();
  const { picture, name, email } = user.user_metadata;
  
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
              src={picture}
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
        {activeButton === 'personalBtn' && (
            <div className="personal">
            <div className="personal__info">
              <div className="personal__user-info">
                <div className="title">Рersonal information</div>
                <div id="name" className="personal__text">
                  Name: {name || "Mari_Petrovna"}
                </div>
                <div id="email" className="personal__text">
                  Email: {email || "MariPetrovna@gmail.com"}
                </div>
                <ButtonForIcon
                  icon={<InfoCircleOutlined style={{ color: "#24A1E0", position: 'absolute', top: '15px', right: '15px' }} />}
                />
              </div>
              <div className="ref-link">
                Referral link: <div className="link">{"http://fgfyjbkjguyfif66//hxb"}</div>
                <div className="ref-link-item">
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
                 <ButtonForIcon
                  icon={<InfoCircleOutlined style={{ color: "#24A1E0"}} />}
                />
                </div>
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
        )}
        {activeButton === 'referralBtn' && (
            <div className="referral">
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