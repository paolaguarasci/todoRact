import React, { Component } from "react";
import Elements from "./components/elements";
import Add from "./components/add";
// import uuid from "uuid4";
import "./App.css";

class App extends Component {
  state = {
    todoList: []
  };
  render() {
    return (
      <div className="App">
        <h1>Todo's</h1>
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
  };
  handleClick = el => {
    const todoList = this.state.todoList.filter(x => x.id !== el.id);
    this.setState({ todoList });
  };
}

export default App;
