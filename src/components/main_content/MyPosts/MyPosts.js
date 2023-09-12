import React from "react";
import Post from "./Post/Post";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div>
      <Post message="привет, классная аватарка"  likes='10'/>
      <Post message="твоя страница просто супер"  likes='7'/>
    </div>
  );
};

export default MyPosts;
