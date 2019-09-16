import React, { Component } from 'react';



class Todolist extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          View Todos
          </div>
        <div className="card-body alert-primary">
          <strong>Welcome to Very Simple Todo App!</strong>
          <p>Get started now by adding a new todo on the left.</p>
        </div>
      </div>

    );
  }
}

export default Todolist;
