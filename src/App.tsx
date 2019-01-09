import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    const unused = "ok";
    return (
      <div className="App">
        <Header />
        <div className="link-item">different css color</div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React Wes
          </a>
        </header>
      </div>
    );
  }
}

export default App;
