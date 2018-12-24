import React, { Component } from "react";
class Add extends Component {
  constructor() {
    super();
    this.state = {
      newTask: {}
    };
  }
  handleSubmit(e) {
    console.log("Handle Submit");
    if (this.refs.title.value === "") {
      alert("Title must be insert");
    } else {
      this.setState(
        {
          newTask: {
            title: this.refs.title.value,
            desc: this.refs.desc.value
          }
        },
        function() {
          // console.log(this.state);
          this.props.addElement(this.state.newTask);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="title" placeholder="title" />
        <input type="text" ref="desc" placeholder="desc" />
        <input type="submit" value="Aggiungi" />
      </form>
    );
  }
}

export default Add;
