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
        <Modal onClick={modalHandler}>
          <ModalPost
              key={posts[key].id}
              id={posts[key].id}
              title={posts[key].title}
              description={posts[key].content}
              imgThumb={posts[key].thumbnail.large}
              author={posts[key].author.name}
              date={posts[key].date}
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
              onClick={() => modalHandler(posts.indexOf(item))}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Posts;
