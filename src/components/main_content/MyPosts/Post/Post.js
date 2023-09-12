import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
  return (
    <div>
        <section>
            <img src="https://avatars.mds.yandex.net/i?id=70189a38a07a10a5ac03efc53cc3393d07c4a7f4-9293428-images-thumbs&n=13" height={20} width={25} alt="какой то текс"></img>
      <input></input>
      <button>Отправить</button>
        </section>
      
    
      <div>
        {props.message}, {props.likes}
      <img src ="https://e7.pngegg.com/pngimages/728/963/png-clipart-nauticoncept-custom-arts-store-mobile-phones-user-avatar-miscellaneous-english.png" height={20} width={25} alt="какой "></img>
      <button><img src ="https://media.rawg.io/media/user_images/70f/70f2d5d94e9fbef0e19e979ca851f6d0.jpg" height={20} width={25} alt="какой "></img></button>
      <button><img src ="https://sun6-21.userapi.com/s/v1/ig2/kXlPquHVeE0LDaMfdvibUw0KcMQCDKjjTIodPoPekJU1jDPct7bESgq85whGMhZsCWYiKablrTncyiUa6x0uyZ9D.jpg?size=741x741&quality=95&crop=50,111,741,741&ava=1" height={20} width={25} alt="как"></img></button>
      
      </div>
      
    </div>
  );
};

export default Post;
