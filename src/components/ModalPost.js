import React from "react";
import "./ModalPost.css";

const ModalPost = (props) => {
  return (
    <div className="c-div_modal">
      <div className="img-section_modal">
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
