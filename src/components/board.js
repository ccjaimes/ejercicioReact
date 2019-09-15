import React, { Component } from 'react';
import Taskboard from './taskboard';

class Board extends Component {
    state = {
        taskboards: [
            {
                title: "To do"
            },
            {
                title: "Doing"
            },
            {
                title: "Done"
            }
        ]
    }
    render() {
        return (
            <div>
                <header style={{textAlign: 'center'}}>
                    <h1>My Kanban App</h1>
                </header>
                <hr></hr>
                <div className="container-fluid">
                    <div className="row">
                        {this.state.taskboards.map((e,f) => <Taskboard value={e} key={f}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;