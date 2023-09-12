import React from "react";
import  s from "./Menu.module.css";

export const Menu = () => {
  return (
    <div>
      <li>
        <img
          className="nav_img"
          src="https://cdn3.iconfinder.com/data/icons/glypho-generic-icons/64/user-man-circle-invert-1024.png"
          width={20}
          height={20}
        ></img>
        Главная
      </li>

      <li>
        <img
          className="nav_img"
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-vector-newspaper-icon-png-image_4231834.jpg"
          width={20}
          height={20}
        ></img>
        Новости
      </li>

      <li>
        <img
          className="nav_img"
          src="https://w7.pngwing.com/pngs/860/272/png-transparent-computer-icons-symbol-online-chat-text-web-smallest-font-icon-line-miscellaneous-angle-text.png"
          width={20}
          height={20}
        ></img>
        Мессенджер
      </li>

      <li>
        <img
          className="nav_img"
          src="https://avatars.mds.yandex.net/i?id=9d8119205d9ccaef54a0e2c8da7b420e706a1bd9-7549525-images-thumbs&n=13"
          width={20}
          height={20}
        ></img>
        Друзья
      </li>
    </div>
  );
};
