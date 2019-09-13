import React, { Component } from 'react';



export default class Addnew extends Component {

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