import React, { Component } from 'react';
import TodoAdd from './TodoAdd';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priority: '0',
      inputText: '',
      todoList: [],
      newId: 0
    }

    this.markCompleted = this.markCompleted.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.addNew = this.addNew.bind(this);
    this.editTodo = this.editTodo.bind(this);
    this.saveTodo = this.saveTodo.bind(this);
    this.selectOnChange = this.selectOnChange.bind(this);
    this.deleteOldInput = this.deleteOldInput.bind(this);
  };

  deleteTodo(i) {
    let todoListCopy = this.state.todoList.slice();
    todoListCopy.splice(i, 1);
    this.setState({ todoList: todoListCopy });
  };

  onInputChange(e) {
    this.setState({ inputText: e.target.value });
  };

  addNew() {
    let todoListCopy = this.state.todoList.slice();
    todoListCopy.push({
      text: this.state.inputText,
      priority: this.state.priority,
      editable: false,
      id: this.state.newId,
      completed: false,
    });
    this.setState({
      todoList: todoListCopy,
      newId: this.state.newId + 1
    });
  };

  deleteOldInput() {

  };

  editTodo(e) {
    let index = parseInt(e.currentTarget.id);
    let newList = this.state.todoList.slice();
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].id === index) {
        newList[i].editable = true;
      }
    };
    this.setState({
      todoList: newList,
    })
  };

  saveTodo(i, id, text, priority) {
    let todoListCopy = this.state.todoList.slice();

    let newTodo = {
      text,
      priority,
      editable: false,
      id
    }
    todoListCopy.splice(i, 1, newTodo);

    this.setState({ todoList: todoListCopy });

  };

  selectOnChange(event) {
    this.setState({ priority: event.target.value });
  };

  markCompleted(todo) {
    let todoListCopy = this.state.todoList;

    for (let i = 0; i < todoListCopy.length; i++) {
      if (todoListCopy[i].id === todo.id) {
        todoListCopy[i].completed = !todoListCopy[i].completed
        if(todoListCopy[i].completed){
          // add class "completed" so the CSS applies
        }

      }
      this.setState({ todoList: todoListCopy })
      
    };



    // { !todoListCopy.completed ? this.props.completed : <textarea className="update-todo-text" onChange={this.props.textarea.completed} /> }



  };

  // {!this.props.todoList.editable ? this.props.todoList.text : <textarea className='update-todo-text' onChange={this.onInputChange} defaultValue={this.props.todoList.text} />}

  render() {
    let fullTodoList = this.state.todoList.map((todo, index) => {

      return (
        <TodoAdd key={index} id={todo.id} todo={todo} delete={() => this.deleteTodo(index)} markCompleted={(this.markCompleted)}
          edit={this.editTodo} save={(text, priority) => this.saveTodo(index, todo.id, text, priority)} />
      );
    });

    return (
      <div className='container'>
        <h1 className='text-white'>Very Simple Todo App</h1>
        <p className='text-white'>Track all of the things</p>
        <hr></hr>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card shadow-lg' id='input-card-1'>
              <div className='card-header' id='header-1'>Add New Todo</div>
              <h4 className='text-black'> I want to.. </h4>
              <div className='listedItems'>
                <textarea id='want-to' placeholder='' className='create-todo-text shadow' defaultValue={this.state.inputText} onChange={this.onInputChange} />
              </div>
              <h4 className='text-black'> How much of a priority is this? </h4>
              <div className='listedItems'>
                <select name='priority' className="create-todo-text mb-5 create-todo-priority shadow" onChange={this.selectOnChange}>
                  <option value={0}>Select a priority</option>
                  <option id='priority-1' value={1} className='priorityList'>Low Priority</option>
                  <option id='priority-2' value={2} className='priorityList'>Mid Priority</option>
                  <option id='priority-3' value={3} className='priorityList'>High Priority</option>
                </select>
              </div>
              <div className='card-footer' id='footer'>
                <button className='create-todo btn btn-success btn-block' onClick={() => { this.addNew(); this.deleteOldInput(); }} type='button' id='create-todo'>Add</button>
              </div>
            </div>
          </div>
          <div className='col-md-8'>
            <div className='card shadow-lg' id='input-card-2'>
              <div className='card-header' id='header-2'>View Todos</div>
              <div className='alert-primary'>
                {this.state.todoList.length === 0 ? <strong>Welcome to Very Simple Todo App!</strong> : <strong>Check box when completed.</strong>}
                <br></br>
                {this.state.todoList.length === 0 ? 'Get started now by adding a new todo on the left.' : <ul>{fullTodoList}</ul>}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
