import React from "react";
import s from "./Messenger.module.css";
import { NavLink } from "react-router-dom";

export const Messenger = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs-item">
        <div className="dialog">
          <NavLink to="annasmirnova">Анна Смирнова</NavLink>
        </div>
        <div className="dialog">
          <NavLink to="raianriazanov">Раян Рязанов</NavLink>
        </div>
        <div className="dialog">
          <NavLink to="viktorrozhin">Виктор Рожин</NavLink>
        </div>
        <div className="dialog">
          <NavLink to="alenasteshenko">Алёна Стешенко</NavLink>
        </div>
      </div>
      <div className="message-1">Привет как ты?</div>
      <div className="message-1">Перезвони!</div>
      <div className="message-1">у меня всё отлично</div>
      <div className="message-1">Скучаю по тебе...</div>
    </div>
  );
};
