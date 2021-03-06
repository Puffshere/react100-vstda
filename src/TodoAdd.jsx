import React, { Component } from 'react';

class TodoAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: props.todo.text,
            priority: props.todo.priority,
            completed: props.todo.comp
        }

        this.onInputChange = this.onInputChange.bind(this);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.save = this.save.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }

    onInputChange(e) {
        this.setState({ inputText: e.target.value });
    }

    onSelectChange(e) {
        this.setState({ priority: e.target.value });
    }

    save(e) {
        this.props.save(this.state.inputText, this.state.priority);
    }

    editTodo(e) {
        this.props.edit(e);
    }


    render() {
        let alert = {
            0: "alert-secondary",
            1: "alert-success",
            2: "alert-warning",
            3: "alert-danger"
        };

        if (this.props.todo.editable && this.props.todo.completed) {
            this.props.markCompleted(this.props.todo);
        }


        return (


            <div>
                <li className={alert[this.props.todo.priority]} >
                    <label className='checkbox'><input type='checkbox' className='completedCheckbox' checked={this.props.todo.completed} id='check' onChange={() => this.props.markCompleted(this.props.todo)} /></label>
                    {!this.props.todo.editable ? <label id='stone' className={this.props.todo.completed ? 'completed log' : 'log'}>{this.props.todo.text}</label> : <textarea className='update-todo-text' id='phone' onChange={this.onInputChange} defaultValue={this.props.todo.text} />}

                    <button className='delete-todo pull-right active btn-circle btn doggy shadow' onClick={this.props.delete}>
                        <i className='glyphicon glyphicon-erase'></i>
                    </button>
                    {!this.props.todo.editable ?
                        <button className='edit-todo pull-right active btn-circle btn clown shadow' id={this.props.id} onClick={this.editTodo}>
                            <i className='glyphicon glyphicon-pencil'></i>
                        </button>
                        : <div> <button className='pull-right active btn-circle btn update-todo swamp shadow' onClick={this.save}>Save</button>
                            <div className="homer">
                                <select defaultValue={alert[this.props.todo.priority]} name='priority' className="create-todo-text mb-5 create-todo-priority shadow" onChange={this.onSelectChange}>
                                    <option value={0}>Select a priority</option>
                                    <option id='priority-1' value={1} className='create-todo-text'>Low Priority</option>
                                    <option id='priority-2' value={2} className='create-todo-text'>Mid Priority</option>
                                    <option id='priority-3' value={3} className='create-todo-text'>High Priority</option>
                                </select>
                            </div>
                        </div>
                    }
                </li>
            </div>
        );
    }
}

export default TodoAdd;
