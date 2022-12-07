import * as React from "react";
import { useState, useContext,useEffect } from "react";
import axios, { isAxiosError } from 'axios'
import "./App.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "./Button";

const appContext = React.createContext("");

export default function BasicTextFields() {

function getPhotos(){
     axios('https://jsonplaceholder.typicode.com/photos')
        .then((response) => { console.log('photos response',response)})
}
function getPosts(){
     axios('https://jsonplaceholder.typicode.com/posts')
        .then((response) => { console.log('posts response',response) })
}
function getComments(){
     axios('https://jsonplaceholder.typicode.com/comments')
        .then((response) => { console.log('comments response',response) })
}

useEffect(() => {
//all  three request running parallely
    getPhotos()
    getPosts()
    getComments()

}, []);


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
