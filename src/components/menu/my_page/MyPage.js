import React from "react";
import s from "./MyPage.module.css";
import Profile from "../../main_content/Profile/Profile";
import Post from "../../main_content/MyPosts/Post/Post";
import MyPosts from "../../main_content/MyPosts/MyPosts";
const MyPage = () => {
  return (
    <div>
      <Profile />
      <Post />
      <MyPosts />
    </div>
  );
};

export default MyPage;
