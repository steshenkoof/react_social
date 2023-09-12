import React from "react";
import Profile from "./Profile/Profile";
import MyPosts from "./MyPosts/MyPosts";
import s from "./MainContent.module.css";

export const MainContent = () => {
  return (
    <div>
      <Profile />
      <MyPosts />
    </div>
  );
};
