import React, { Component } from "react";
import Elements from "./components/elements";
import Add from "./components/add";
import "./App.css";

class App extends Component {
  state = {
    todoList: [
      {
        id: 0,
        title: "fare la spesa",
        desc: "pizza, birra, arachidi",
        done: false
      },
      {
        id: 2,
        title: "mandare un msg a maria cristina",
        desc: "sukah",
        done: false
      },
      { id: 10, title: "studiare!!!!", desc: "oddio...", done: false }
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
    todoList.push(el);
    this.setState({ todoList });
  };
  handleClick = el => {
    const todoList = this.state.todoList.filter(x => x.id !== el.id);
    this.setState({ todoList });
  };
}

export default App;
