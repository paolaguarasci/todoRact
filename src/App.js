import React, { Component } from "react";
import Elements from "./components/elements";
import Add from "./components/add";
import uuid from "uuid4";
import "./App.css";

class App extends Component {
  state = {
    todoList: [
      {
        id: uuid(),
        title: "fare la spesa",
        desc: "pizza, birra, arachidi",
        done: false
      },
      {
        id: uuid(),
        title: "mandare un msg a maria cristina",
        desc: "sukah",
        done: false
      },
      { id: uuid(), title: "studiare!!!!", desc: "oddio...", done: false }
    ]
  };
  render() {
    return (
      <div className="App">
        <Add addElement={this.handleAdd.bind(this)} />
        <Elements todoList={this.state.todoList} onClick={this.handleClick} />
      </div>
    );
  }
  handleAdd = el => {
    console.log("Aggiungo ", el);
    let todoList = [...this.state.todoList];
    todoList.unshift(el);
    this.setState({ todoList });
  };
  handleClick = el => {
    const todoList = this.state.todoList.filter(x => x.id !== el.id);
    this.setState({ todoList });
  };
}

export default App;
