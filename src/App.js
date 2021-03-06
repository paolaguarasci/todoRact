import React, { Component } from "react";
import Elements from "./components/elements";
import Add from "./components/add";
import uuid from "uuid4";
import "./App.css";

class App extends Component {
  state = {
    todoList: [{ id: uuid(), title: "Init" }]
  };
  constructor() {
    super();
    console.log("App - constructor");
    // this.state.todoList = window.localStorage(todoList);
    if (typeof Storage !== "undefined") {
      let item = JSON.parse(localStorage["todoList"]);
      this.state.todoList = item;
    }
  }

  render() {
    return (
      <div className="App container">
        <h1 className="m-2 display-1">Todo's</h1>
        <Elements todoList={this.state.todoList} onClick={this.handleClick} />
        <Add addElement={this.handleAdd.bind(this)} />
      </div>
    );
  }
  handleAdd = el => {
    console.log("Aggiungo ", el);
    let todoList = [...this.state.todoList];
    todoList.unshift(el);
    this.setState({ todoList });
    localStorage["todoList"] = JSON.stringify(todoList);
  };
  handleClick = el => {
    const todoList = this.state.todoList.filter(x => x.id !== el.id);
    this.setState({ todoList });
  };
}

export default App;
