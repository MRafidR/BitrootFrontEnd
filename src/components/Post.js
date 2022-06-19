import React from "react";
import "./Post.css";
const Post = (props) => {
  return (
    <div className="c-div">
      <div className="img-section">
        <img
          src={props.imgThumb}
          alt="/">
        </img>
        <div className="overlay" onClick={props.onClick}><p className="overlay_text">Learn More</p></div>

        <div className="title">
          <h2>{props.title}</h2>
          <p>
            {props.description}
          </p>
          <div className="author-date">
            <p>{props.author}</p>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
