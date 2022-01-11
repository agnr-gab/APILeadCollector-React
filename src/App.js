import React, {Component} from "react";
import Login from "./Componente/PagesLogin";
import "./App.css";

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <Login/>
      </div>
    );
  }
}