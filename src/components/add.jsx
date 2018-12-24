import React, { Component } from "react";
import uuid from "uuid4";
class Add extends Component {
  constructor() {
    super();
    this.state = {
      newTask: {}
    };
  }
  handleSubmit(e) {
    // console.log("Handle Submit");
    if (this.refs.title.value === "") {
      alert("Title must be insert");
    } else {
      this.setState(
        {
          newTask: {
            id: uuid(),
            title: this.refs.title.value
          }
        },
        function() {
          this.props.addElement(this.state.newTask);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="formAdd">
        <div className="input-group input-group-lg">
          <input
            id="task"
            type="text"
            ref="title"
            placeholder="New Task"
            className="form-control"
          />
        </div>
      </form>
    );
  }
}

export default Add;
