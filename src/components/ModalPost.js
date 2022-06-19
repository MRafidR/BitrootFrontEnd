import React from "react";
import "./ModalPost.css";

const ModalPost = (props) => {
  return (
    <div className="c-div">
      <div className="img-section">
        <img src={props.imgThumb} alt="/"></img>
        <div className="title">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <div className="author-date">
            <p>{props.author}</p>
            <p>{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPost;
