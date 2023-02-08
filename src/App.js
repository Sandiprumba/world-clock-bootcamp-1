import React from "react";
import logo from "./logo.png";
import "./App.css";
import Clock from "./Clock.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <img src={logo} className="App-logo" alt="logo" />{" "}
          </p>
          <Clock timeZone="Asia/Singapore" /> <br></br>
          <Clock timeZone="America/Los_Angeles" />
          <br></br>
          <Clock timeZone="Europe/London" />
        </header>
      </div>
    );
  }
}
export default App;
