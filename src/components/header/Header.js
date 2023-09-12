import React from "react";
import classes from './Header.module.css'

export const Header = () => {
  return (
    <div>
      <header>
        <img
          src="https://sun6-23.userapi.com/s/v1/ig2/Kf5J9y6so2fzV9jxlGlm84cEZNihW1vYwxEpnhcrFQdUTLYwrP93BtrASJa2TF8RzyyniTkJwJ_74X_686e0xqh2.jpg?size=1003x1003&quality=95&crop=45,47,1003,1003&ava=1"
          width={50}
          height={50}
          className={classes.header}
        ></img>
      </header>
    </div>
  );
};
