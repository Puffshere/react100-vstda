import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todolist from './Todolist';
import Addnew from './Addnew';

class App extends Component {

  render() {
    return (
      <div className='container'>
        <h1 className="text-white">Very Simple Todo App</h1>
        <h3 className="text-white">Track of all things</h3>
        <hr className="my-4"></hr>
        <div className="row">
          <div className="col-4">
            <Addnew/>
          </div>
          <div className="col">
            <Todolist/>
          </div>
        </div>
      </div>
    );
  }
}







export default App;
