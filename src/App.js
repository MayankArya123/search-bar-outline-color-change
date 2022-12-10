import * as React from "react";
import { useState, useContext, useEffect } from "react";
import axios, { isAxiosError } from "axios";
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";
import Home from "./Home";

const appContext = React.createContext("");

export default function BasicTextFields() {
  const [data, setdata] = useState([]);
  const [posts, setposts] = useState([]);
  const [photos, setphotos] = useState([]);
  const [comments, setcomments] = useState([]);
  const [Loading,setLoading] = useState(true)

  function getPhotos() {
    return axios("https://jsonplaceholder.typicode.com/photos");
  }
  function getPosts() {
    return axios("https://jsonplaceholder.typicode.com/posts");
  }
  function getComments() {
    return axios("https://jsonplaceholder.typicode.com/comments");
  }

  useEffect(() => {
    let GetPostsPromise = new Promise(function (resolve, reject) {
      var response = getPosts();
      resolve(response);
    });

    let GetPhotosPromise = new Promise(function (resolve, reject) {
      var response = getPhotos();
      resolve(response);
    });

    let GetCommentsPromise = new Promise(function (resolve, reject) {
      var response = getComments();
      resolve(response);
    });

    //all  three request running parallely
    Promise.all([GetPostsPromise, GetPhotosPromise, GetCommentsPromise]).then(
      (values) => {
        setLoading(false)
        setposts(values[0].data.splice(0, 10));
        setphotos(values[1].data.splice(0, 10));
        setcomments(values[2].data.splice(0, 10));

        //as an alternative i can also save all data in one variable that is main data
      }
    ).catch((error) => {
      console.error(error.message);
    });
  }, []);

  console.log("all posts", posts);
  console.log("all photos", photos);
  console.log("all comments", comments);

  const [color, setColor] = useState(true);

  return (
    <appContext.Provider value={{ color, setColor, photos, posts, comments }}>
      {
      Loading ? <h2 className="loader" > loading </h2> : <Home />
      } 
      <Box component="form" className="form" noValidate autoComplete="off">
        <TextField
          className="OutlinedBasic"
          label="Outlined"
          variant="outlined"
        />
      </Box>
      <div className="wrapper">
        <Button />
      </div>
    </appContext.Provider>
  );
}

export { appContext };
