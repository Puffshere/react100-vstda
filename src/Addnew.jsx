import React, { Component } from 'react';



class Addnew extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Add New Todo
              </div>
                <div className="card-body">
                    <p><strong>I want to..</strong></p>
                    <textarea className="create-todo-text" id="txtArea">
                        {/* <Todoscontain /> */}
                    </textarea>
                    <p><strong>How much of a priority is this?</strong></p>
                    <select className="dropdown btn-block">
                        <option>Select a priority</option>
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>
                </div>
                <div className="card-footer">
                    <button type="btn" className="btn btn-success btn-block" id="btnPush">Add</button>
                </div>
            </div>

        );
    }
}

export default Addnew;
