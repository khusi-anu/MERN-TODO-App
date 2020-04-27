import React, { Component } from "react";

class CreateTodo extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            todo_description = ' ',
            todo_responsible = '',
            todo_priority = '',
            todo_completed = false
        }
    }

  render() {
    return (
      <div>
        <p> Welcome to create Todo Component! </p>
      </div>
    );
  }
}

export default CreateTodo;
