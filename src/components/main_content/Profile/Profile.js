import React from "react";
import s from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <img
        className="img_cover"
        src="https://cdn.tripster.ru/thumbs2/9d95839a-bc4e-11ed-8123-8a55bffdb137.1200x1000.jpeg"
        height={240}
        width={1100}
        alt="маями"
      ></img>
      <div className="about">
        <section>
          <img
            className="about_img_icon"
            src="https://sun9-36.userapi.com/impg/sXbMA6TUiCsn3TIT2dmi8egDPZMdGVhZDRh-Ng/YypHFQgl1xM.jpg?size=1200x1600&quality=95&sign=f97d4b33e38959c80b2c7701c0d635d7&type=album"
            height={100}
            width={100}
            alt="vitaliy steshenko"
          ></img>
          <div className="about">
            <h1>Vitaliy Steshenko</h1>
            <ul className="about__">
              <li>Родился: 2 ноября</li>
              <li>Место рождения: Россия</li>
              <li>Регион: РУС125</li>
              <li>Веб-сайт: https://vk.com/id706936754</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
