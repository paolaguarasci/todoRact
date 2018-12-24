import React, { Component } from "react";

class Element extends Component {
  render() {
    return (
      <li
        onClick={() => this.props.onClick(this.props.element)}
        className="list-group-item text-left"
      >
        {this.props.element.title}
      </li>
    );
  }
}

export default Element;
