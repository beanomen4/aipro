import React from "react";
import "./Profile.scss";
import { Image } from "antd";
function Profile({name, balance}) {
  return (
    <div className="wrapper">
      <div className="profile">
          <div className="profile__head">
            <div className="user-info">
              <Image
                width={170}
                style={{borderRadius: '100%'}}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
              <div className="user-info__name">
                  {name || 'Masha Petrenko'}
              </div>
              <div className="user-info__balance">
                  Вalance: {balance || '1,000'} AiCoin
            </div>
            </div>
          </div>
          <div className="profile__info">
            
          </div>
        </div>
      </div>
  );
}

export default Profile;
