import * as React from "react";
import { useState, useContext,useEffect } from "react";
import axios, { isAxiosError } from 'axios'
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";

const appContext = React.createContext("");

export default function BasicTextFields() {


  const [posts,setposts] = useState([])
  const [photos,setphotos] = useState([])
  const [comments,setcomments] = useState([])


function getPhotos(){
 return   axios('https://jsonplaceholder.typicode.com/photos')
}
function getPosts(){
  return   axios('https://jsonplaceholder.typicode.com/posts')

}
function getComments(){
   return  axios('https://jsonplaceholder.typicode.com/comments')
 
}

useEffect(() => {
//all  three request running parallely
    
let GetPostsPromise = new Promise(function(resolve, reject) {
  var  response= getPosts()
   resolve(response)
  });
  
  // resolve runs the first function in .then
  GetPostsPromise.then(
    result =>setposts(result.data) ,// shows "done!" after 1 second
    error => alert(error) // doesn't run
  );


    let GetPhotosPromise = new Promise(function(resolve, reject) {
    var  response= getPhotos()
     resolve(response)
    });
    
    // resolve runs the first function in .then
    GetPhotosPromise.then(
      result =>setphotos(result.data) ,// shows "done!" after 1 second
      error => alert(error) // doesn't run
    );

    let GetCommentsPromise = new Promise(function(resolve, reject) {
    var  response= getComments()
     resolve(response)
    });
    
    // resolve runs the first function in .then
    GetCommentsPromise.then(
      result =>setcomments(result.data) ,// shows "done!" after 1 second
      error => alert(error) // doesn't run
    );

   

}, []);

console.log('all posts',posts)
console.log('all photos',photos)
console.log('all comments',comments)


  const [color, setColor] = useState(true);

  return (
    <appContext.Provider value={{ color, setColor }}>
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
