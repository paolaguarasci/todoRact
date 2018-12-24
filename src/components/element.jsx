import React, { Component } from "react";

class Element extends Component {
  render() {
    return (
      <li onClick={() => this.props.onClick(this.props.element)}>
        <strong>{this.props.element.title}</strong>
        <br />
        {this.props.element.desc}
      </li>
    );
  }
  // formatDone = () => {
  //   if (this.props.element.done) {
  //     console.log("Done ", this.props.element.id);
  //     return "done";
  //   }
  // };
}

export default Element;
