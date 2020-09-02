import React from "react";
import "./StoryReel.css";
import Story from "../story/Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbySopxhYHbpzaomZQdtSfnC_u0Fo3fXECNQ&usqp=CAU"
        profileSrc={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6RXi7dyC8jI5G7OZgXxlJSjs_zmEygK6NsA&usqp=CAU"
        }
        title={"something"}
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbySopxhYHbpzaomZQdtSfnC_u0Fo3fXECNQ&usqp=CAU"
        profileSrc={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6RXi7dyC8jI5G7OZgXxlJSjs_zmEygK6NsA&usqp=CAU"
        }
        title={"something"}
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbySopxhYHbpzaomZQdtSfnC_u0Fo3fXECNQ&usqp=CAU"
        profileSrc={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6RXi7dyC8jI5G7OZgXxlJSjs_zmEygK6NsA&usqp=CAU"
        }
        title={"something"}
      />

      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTbySopxhYHbpzaomZQdtSfnC_u0Fo3fXECNQ&usqp=CAU"
        profileSrc={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6RXi7dyC8jI5G7OZgXxlJSjs_zmEygK6NsA&usqp=CAU"
        }
        title={"something"}
      />
    </div>
  );
};

export default StoryReel;
