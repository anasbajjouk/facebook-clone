import React from "react";
import "./Feed.css";
import StoryReel from "../storyReel/StoryReel";
import MessageSender from "../messageSender/MessageSender";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
