import React from 'react';

const Todo = ({todo, num, index, deleteTodo}) => {
    return (
        <div className="list">
            <h3>{num} - {todo}</h3>&nbsp;<button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
        </div>
    )
}

export default Todo