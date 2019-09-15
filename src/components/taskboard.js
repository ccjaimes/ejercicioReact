import React, { Component } from 'react';
import Task from "./task";

class Taskboard extends Component {
    state = {
        title: this.props.value.title,
        tasks: [
            {
                id:1,
                body: "Task example"
            }
        ]
    }

    onSubmit = (e) => {
        e.preventDefault();
        let text = document.getElementById("inputTask"+this.state.title).value;
        if(text){
            document.getElementById("inputTask"+this.state.title).value = "";
            let tasks2 = this.state.tasks;
            tasks2.push({
                id:(tasks2.length+1),
                body:text
            }); 
            this.setState({
                title:this.state.title,
                tasks: tasks2
            })
        }
    }
    
    onDelete = (id, e) => {
        e.preventDefault();
        let arr = this.state.tasks;
        // eslint-disable-next-line
        for(let val in arr){
            if(arr[val]["id"] === id){
                delete arr[val];
            }
        }
        this.setState({
            title:this.state.title,
            tasks:arr
        });
    }

    render() {
        return (
            <div className="col-4 text-center">
                <div className="card">
                    <div className="card-header">
                        {this.state.title}
                    </div>
                    <div className="card-body">
                        {this.state.tasks.map((e, f) => <Task key={f} onChange={this.onDelete} value={{id: e["id"],title: "Task No. " + e["id"], body: e["body"]}} />)}
                        <br />
                        <form>
                            <div className="row">
                                <div className="col-10">
                                    <label htmlFor="inputTask" className="sr-only">New Task</label>
                                    <input className="form-control" id={"inputTask"+this.state.title} name="inputTask" placeholder="New Task"></input>
                                </div>
                                <div className="col-2">
                                    <button type="submit" onClick={this.onSubmit} className="btn btn-primary">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Taskboard;