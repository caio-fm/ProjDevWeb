import logo from './logo.svg';
import './App.css';
import SignupForm from './components/SignupForm.js';


function App() {

  return (
    <div className="App">
      <head>
        <title>Game Zone</title>
        <link rel="icon" href="favicon.ico" />
      </head>
      <div id="main">
        <div id="navbar">
          <a href="/">Home</a>
          <div id="welcome">
          </div>
        </div>
        <div id="gzlogo">
          <img src= "logo.png" alt="logo" height="170" width="170"></img>
          <br></br>
        </div>
          <div id="sections">
          <a href="section">Sony</a><hr></hr>
          <a href="section">Nintendo</a><hr></hr>
          <a href="section">Microsoft</a><hr></hr>
          <a href="section">PC</a><hr></hr>
          <a href="section">Off-topic</a><hr></hr>
          </div>
      </div>
      <SignupForm></SignupForm>
    </div>



  );
}

export default App;
