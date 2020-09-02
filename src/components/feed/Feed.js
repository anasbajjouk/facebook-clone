import React from "react";
import "./Feed.css";
import StoryReel from "../storyReel/StoryReel";
import MessageSender from "../messageSender/MessageSender";
import Post from "../post/Post";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://media.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0?e=2159024400&v=beta&t=C7KMOtnrJwGrMXmgIk2u1B8a7VRfgxMwXng9cdP9kZk"
        message="IT WORKS"
        timestamp="115573737600"
        username="anas"
        image="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"
      />
    </div>
  );
};

export default Feed;
