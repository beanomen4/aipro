import React, { useState } from "react";
import "./Profile.scss";
import { Image } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import ButtonForIcon from "../../ui/ButtonForIcon";
function Profile({ name, balance }) {
  const [activeButton, setActiveButton] = useState('personalBtn');

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
            style={{left: '0'}}
            className={`btn ${
              activeButton === "personalBtn" ? "btn_active" : ""
            }`}
          >
            Personal Area
          </button>
          <button
            onClick={(e) => changeButtonActive(e.target.id)}
            style={{right: '0'}}
            id="referralBtn"
            className={`btn ${
              activeButton === "referralBtn" ? "btn_active" : ""
            }`}
          >
            Referral system
          </button>
          <div className="profile__personal-info">
              
          </div>
          <div className="profile__referral-info"></div>
        </div>
      </div>
    </div>
  );

  function changeButtonActive(id) {
    setActiveButton(id);
  }
}

export default Profile;
