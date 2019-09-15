import React, { Component } from 'react';

class Task extends Component {
    state = {
        id:this.props.value.id,
        title: this.props.value.title,
        body: this.props.value.body
    }

    deleteTask = (e,id) =>{
        this.props.onChange(id, e);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.state.title}
                </div>
                <div className="card-body">
                    {this.state.body}
                </div>
                <div className="card-footer">
                    <button type="submit" onClick={(e) => this.deleteTask(e,this.state.id)} className="btn btn-primary">Task Done</button>
                </div>
            </div>
        );
    }
}

export default Task;