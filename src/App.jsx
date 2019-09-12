import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 className="text-white">Very Simple Todo App</h1>
        <h3 className="text-white">Track of all things</h3>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col">
            <Addnew />
          </div>
          <div className="col">
            <Todolist />
          </div>
        </div>
      </div>
    );
  }
}


class Addnew extends Component {

  render() {
    return (

      <div className="card">
        <div className="card-header">
          Add New Todo
            </div>
        <div className="card-body">
          <p className="font-weight-bold">I want to..</p>
          <textarea className="create-todo-text">
          </textarea>
          <p className="font-weight-bold">How much of a priority is this?</p>
          <div className="dropdown">
            <select className="create-todoo-priority btn-block">
              <option>Select a priority</option>
              <option value="1"></option>
              <option value="2"></option>
              <option value="3"></option>
            </select>
          </div>
        </div>
        <div className="card-footer">
          <button type="btn" className="btn btn-success btn-block">Add</button>
        </div>
      </div>
    );
  }
}


class Todolist extends Component {

  render() {
    return (

      <div className="card">
        <div className="card-header">
          View Todos
        </div>


        <div className="card-body-1 alert-primary">
          <h5 className="font-weight-bold">Welcome to Very Simple Todo App!</h5>
          <h5>Get started now by adding a new todo on the left.</h5>

        

            </div>

          </div>

        

    );
  }
}


export default App;
