import React, { useEffect, useState, useRef } from "react";
import "./Posts.css";
import Post from "./Post";
import Modal from "../UI/Modal";
import ModalPost from "./ModalPost";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [modalClick, setModalClick] = useState(false);
  const [key, setKey] = useState();

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const modalHandler = (item) => {
    setModalClick(!modalClick);
    setKey(item);
  };
  console.log(posts);
  return (
    <>
      {modalClick && (
        <Modal>
          <ModalPost
              key={posts[0].id}
              id={posts[0].id}
              title={posts[0].title}
              description={posts[0].content}
              imgThumb={posts[0].thumbnail.large}
              author={posts[0].author.name}
              date={posts[0].date}
            />
        </Modal>
      )}
      {!modalClick && (
        <div className="p-div">
          {posts.map((item) => (
            <Post
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.content}
              imgThumb={item.thumbnail.small}
              author={item.author.name}
              date={item.date}
              onClick={modalHandler}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
