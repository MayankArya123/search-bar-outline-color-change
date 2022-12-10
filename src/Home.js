import "./Home.css";

import React, { useContext } from "react";
import { appContext } from "./App";

const Home = () => {
  const { photos, posts, comments, data } = useContext(appContext);

  console.log("all posts", posts);
  console.log("all photos", photos);
  console.log("all comments", comments);
  return (
    <div className="row">
      <div className="col-10 col-lg-4">
        <h4> all posts </h4>

        {posts &&
          posts.map((item) => {
            return (
              <div className="post">
                <p> title = {item.title} </p>
                <p> body = {item.body} </p>
              </div>
            );
          })}
      </div>
      <div className="col-10 col-lg-4">
        <h4> all photos </h4>

        {photos &&
          photos.map((item) => {
            return (
              <div className="photo">
                <img src={item.url} />
              </div>
            );
          })}
      </div>
      <div className="col-10 col-lg-4">
      <h4> all comments </h4>
{comments &&
  comments.map((item) => {
    return (
      <div className="comment">
       <p>  name = {item.name}</p>
       <p> body = {item.body} </p>
      </div>
    );
  })}
      </div>
    </div>
  );
};

export default Home;
