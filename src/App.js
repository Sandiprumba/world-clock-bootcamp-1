import React from "react";
import "./App.css";
import Clock from './Components/Clock'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock name ="sara"/>
          <Clock name ="Singapore" timeZone="Asia/Singapore"/>
          <Clock name='America' timeZone="America/New_York"/>
    
        </header>
      </div>
    );
  }
}
export default App;
