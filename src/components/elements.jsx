import React, { Component } from "react";
import Element from "./element";
class Elements extends Component {
  render() {
    return (
      <ul className="todos list-group">
        {this.props.todoList.map(el => {
          return (
            <Element element={el} key={el.id} onClick={this.props.onClick} />
          );
        })}
      </ul>
    );
  }
}

export default Elements;
