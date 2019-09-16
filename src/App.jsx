import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todoscontain from './Todoscontain';
import Addnew from './Addnew';
import Todos from './Todos';
import uuid from 'uuid';
// import Todoitems from './Todoitems';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: uuid.v4(),
          title: 'Learn how to code.',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Bring in donuts.',
          completed: false
        },
        {
          id: uuid.v4(),
          title: 'Finish this damn app.',
          completed: false
        },
      ]
    }
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className='container'>
        <h1 className="text-white">Very Simple Todo App</h1>
        <h3 className="text-white">Track of all things</h3>
        <hr className="my-4"></hr>

        <div className="row">
          <div className="col-4">
            <Addnew />
          </div>
          <div className="col">
            <Todoscontain />
          </div>
          <div>
            {/* <Todos todos={this.state.todos} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
