import'./App.css';
import WelcomeUser from './WelcomeUser';
import Button from './Button';
import NewestUser from './NewestUser';

import React, {useState, useEffect} from "react";

function App(props) {

  const usuario = document.getElementById("usuario");
  return (
    <div className="App">
      <head>
        <title>Game Zone</title>
        <link rel="icon" href="favicon.ico" />
      </head>
      <div id="main">
        <div id="navbar">
          <a href="home.html">Home</a>
          <div id="welcome">
          </div>
        </div>
        <div id="gzlogo">
          <img src= "logo.png" alt="logo" height="170" width="170"></img>
          <br></br>
          <a href="register.html">Clique aqui para se registrar!</a><hr></hr>
          <NewestUser></NewestUser>
        </div>
          <div id="sections">
          <a href="section.html">Sony</a><hr></hr>
          <a href="section.html">Nintendo</a><hr></hr>
          <a href="section.html">Microsoft</a><hr></hr>
          <a href="section.html">PC</a><hr></hr>
          <a href="section.html">Off-topic</a><hr></hr>
          </div>
      </div>
      <WelcomeUser id="login" text="Clique no botão abaixo para fazer login!"></WelcomeUser>
      <Button></Button>
    </div>



  );
}

export default App;
